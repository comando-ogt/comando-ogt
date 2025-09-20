import { useState } from "react";
import { supabase } from "../supabase";

interface Props {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
    } else {
      setError("");
      onLogin();
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg w-full max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4">Login Administrador</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-800 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-800 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 p-2 rounded w-full mt-2 hover:bg-green-600"
      >
        Iniciar sesión
      </button>
    </div>
  );
}
