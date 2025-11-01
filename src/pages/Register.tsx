import { motion } from "motion/react";
import { Label } from "radix-ui";
import { useState, type FormEvent } from "react";
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

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [discord, setDiscord] = useState("");
  const [hll, setHll] = useState("");
  const [level, setLevel] = useState<number>(1);
  const [status, setStatus] = useState<"granted" | "denied" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          discord_username: discord,
          hll_username: hll,
          hll_level: level,
        },
      },
    });

    setLoading(false);

    if (error) {
      setStatus("denied");

      return;
    }

    setStatus("granted");
  };

  return (
    <main className="flex flex-1 justify-center items-center bg-black/90 p-4">
      <motion.div
        className="bg-neutral-900 p-8 rounded-md w-full max-w-xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="mb-6 font-mono text-2xl text-center tracking-widest"
          variants={item}
        >
          ENLISTAMIENTO A COMANDO OGT
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <TextInput
              type="password"
              name="password"
              required
              placeholder="Clave"
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <TextInput
              type="text"
              name="discord"
              required
              placeholder="Nombre de usuario en Discord"
              onChange={(e) => setDiscord(e.target.value)}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <TextInput
              type="text"
              name="hll"
              required
              placeholder="Nombre de usuario en Hell Let Loose"
              onChange={(e) => setHll(e.target.value)}
            />
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2"
          >
            <Label.Root htmlFor="level">Nivel en Hell Let Loose:</Label.Root>
            <TextInput
              type="number"
              name="level"
              id="level"
              required
              defaultValue={1}
              min="1"
              step={1}
              className="flex-1 !w-20"
              onChange={(e) => setLevel(parseInt(e.target.value))}
            />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show">
            <Button
              type="submit"
              variant="green"
              disabled={loading}
              className="w-full"
            >
              {loading ? "VERIFICANDO..." : "ENLISTAR"}
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
                status === "granted"
                  ? "ENLISTAMIENTO LISTO... REVISA TU CORREO PARA VERIFICAR!"
                  : "ENLISTAMIENTO DENEGADO"
              }
            />
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
