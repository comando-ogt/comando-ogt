import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router";

import { motion } from "motion/react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { TypewriterText } from "../components/TypeWriterText";
import { supabase } from "../supabase";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"granted" | "denied" | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname ?? "/comando";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setStatus("denied");

      return;
    }

    setStatus("granted");

    setTimeout(() => {
      navigate(from, { replace: true });
    }, 3500);
  };

  return (
    <main className="flex flex-1 justify-center items-center bg-black/90 p-4">
      <motion.div
        className="p-8 border border-ogt-green rounded-md w-full max-w-xl text-ogt-green"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="mb-6 font-mono text-2xl tracking-widest animate-pulse"
          variants={item}
        >
          &gt; ACCESO REQUIRE IDENTIFICACIÓN
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} initial="hidden" animate="show">
            <TextInput
              type="email"
              name="email"
              required
              placeholder="Correo"
              className="!bg-black border-ogt-green focus:outline-none font-mono"
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <TextInput
              type="password"
              name="password"
              required
              placeholder="Clave"
              className="!bg-black border-ogt-green focus:outline-none font-mono"
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <Button
              type="submit"
              variant="green"
              disabled={loading}
              className="w-full font-mono !text-black tracking-wider"
            >
              {loading ? "VERIFICANDO..." : "IDENTIFICAR"}
            </Button>
          </motion.div>
        </motion.form>

        {status && (
          <motion.div
            className={`mt-6 text-center text-lg font-mono tracking-wide ${
              status === "granted" ? "text-ogt-green" : "text-ogt-red"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TypewriterText
              text={
                status === "granted" ? "ACCESO CONCEDIDO" : "ACCESO DENEGADO"
              }
            />
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
