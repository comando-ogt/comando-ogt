import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { MainSection } from "../components/MainSection";
import AdminLogin from "../components/AdminLogin";
import AdminPanel from "../components/AdminPanel";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

interface Resultado {
  id: number;
  jugador: string;
  kills: number;
  deaths: number;
  fecha: string;
}

export default function Competitivo() {
  const [user, setUser] = useState<any>(null);
  const [topPlayers, setTopPlayers] = useState<Resultado[]>([]);
  const [ultimosResultados, setUltimosResultados] = useState<Resultado[]>([]);
  const [showLogin, setShowLogin] = useState(false);

  // ---------------- Sesión Admin ----------------
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error obteniendo sesión:", error);
        return;
      }
      setUser(data.session?.user ?? null);
    };
    fetchSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  // ---------------- Funciones de actualización ----------------
  const updateTopPlayers = (resultados: Resultado[]) => {
    const sorted = [...resultados]
      .sort((a, b) => b.kills - a.kills)
      .slice(0, 3);
    setTopPlayers(sorted);
  };

  const updateUltimosResultados = (resultados: Resultado[]) => {
    const sorted = [...resultados]
      .sort(
        (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
      )
      .slice(0, 10);
    setUltimosResultados(sorted);
  };

  // ---------------- Fetch inicial + Realtime ----------------
  useEffect(() => {
    const fetchResultadosAsync = async () => {
      try {
        const { data, error } = await supabase.from("resultados").select("*");
        if (error) {
          console.error("Error obteniendo resultados:", error);
          return;
        }
        if (data) {
          updateTopPlayers(data);
          updateUltimosResultados(data);
        }
      } catch (err) {
        console.error("Error inesperado al obtener resultados:", err);
      }
    };

    fetchResultadosAsync();

    // 🔹 Suscripción Realtime
    const channel = supabase
      .channel("resultados-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "resultados" },
        (payload) => {
          console.log("Evento realtime recibido en Competitivo:", payload);

          const newRow = payload.new as Resultado;
          const oldRow = payload.old as Resultado;

          switch (payload.eventType) {
            case "INSERT":
              setUltimosResultados((prev) =>
                [newRow, ...prev].slice(0, 10)
              );
              setTopPlayers((prev) =>
                [...prev, newRow]
                  .sort((a, b) => b.kills - a.kills)
                  .slice(0, 3)
              );
              break;

            case "UPDATE":
              setUltimosResultados((prev) =>
                prev.map((r) => (r.id === newRow.id ? newRow : r))
              );
              setTopPlayers((prev) =>
                [...prev]
                  .map((r) => (r.id === newRow.id ? newRow : r))
                  .sort((a, b) => b.kills - a.kills)
                  .slice(0, 3)
              );
              break;

            case "DELETE":
              setUltimosResultados((prev) =>
                prev.filter((r) => r.id !== oldRow.id)
              );
              setTopPlayers((prev) =>
                prev.filter((r) => r.id !== oldRow.id)
              );
              break;
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // ---------------- Acciones ----------------
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // ---------------- Render ----------------
  return (
    <MainSection className="flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold text-green-400 text-center my-8">
        Equipo Competitivo - Comando OGT
      </h1>

      {/* 🔥 Presentación del equipo con animación */}
      <motion.div
        className="flex flex-col md:flex-row items-center bg-gray-900 p-8 rounded-2xl shadow-lg mb-12 max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div
          className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/OGT_2.png" // 📌 coloca tu logo en /public
            alt="Logo Comando OGT"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-green-500 shadow-lg"
          />
        </motion.div>

        {/* Texto de presentación */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            🏆 COMANDO OGT – Donde la estrategia se convierte en leyenda
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            COMANDO OGT no es solo un equipo competitivo, es una hermandad forjada en la disciplina, 
            la táctica y la pasión por la victoria. Cada integrante aporta fuerza, inteligencia y 
            precisión quirúrgica en el campo de batalla, demostrando que la unión supera cualquier obstáculo.
            {"\n\n"}
            Nuestro nombre es sinónimo de determinación y respeto, un sello que representa esfuerzo, 
            constancia y el hambre de superarse en cada enfrentamiento. Somos un escuadrón que no deja 
            nada al azar: entrenamos, analizamos y perfeccionamos cada jugada para alcanzar la excelencia.
            {"\n\n"}
            ⚔️ En COMANDO OGT, la competencia no es solo ganar, es dejar huella.
            {"\n"}
            🔥 Somos rivalidad, estrategia y adrenalina en estado puro.
            {"\n"}
            🚀 Nuestro objetivo: conquistar la cima y marcar historia en la escena competitiva.
            {"\n\n"}
            <span className="text-red-400 font-bold">
              COMANDO OGT: más que un equipo, una fuerza imparable.
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Botones de sesión */}
      {!user ? (
        <Button onClick={() => setShowLogin(true)}>Iniciar sesión Admin</Button>
      ) : (
        <Button onClick={handleLogout}>Cerrar sesión</Button>
      )}

      {/* Modal de login */}
      {showLogin && !user && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-white text-xl"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <AdminLogin onLogin={() => setShowLogin(false)} />
          </div>
        </div>
      )}

      {/* Top 3 jugadores */}
      <h2 className="text-3xl font-bold text-white mt-8 mb-4">
        Mejores de la Semana
      </h2>
      <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
        {topPlayers.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 p-4 rounded-2xl text-center shadow hover:scale-105 transition"
          >
            <h3 className="text-2xl text-red-400 font-bold">{p.jugador}</h3>
            <p className="text-gray-300">Kills: {p.kills}</p>
            <p className="text-gray-400">Deaths: {p.deaths}</p>
            <p className="text-sm text-gray-500">
              K/D: {(p.kills / Math.max(1, p.deaths)).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Tabla de últimos resultados */}
      <h2 className="text-3xl font-bold text-white mb-4">Últimos Resultados</h2>
      <div className="overflow-x-auto w-full mb-8">
        <table className="min-w-full border border-green-400 text-left">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-6 py-3">Jugador</th>
              <th className="px-6 py-3">Kills</th>
              <th className="px-6 py-3">Deaths</th>
              <th className="px-6 py-3">Fecha</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-gray-300">
            {ultimosResultados.map((res) => (
              <tr key={res.id}>
                <td className="px-6 py-3">{res.jugador}</td>
                <td className="px-6 py-3">{res.kills}</td>
                <td className="px-6 py-3">{res.deaths}</td>
                <td className="px-6 py-3">
                  {new Date(res.fecha).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AdminPanel */}
      {user && <AdminPanel />}
    </MainSection>
  );
}
