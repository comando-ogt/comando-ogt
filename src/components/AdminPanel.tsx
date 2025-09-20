// AdminPanel.tsx
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { Button } from "./Button";

interface Resultado {
  id: number;
  jugador: string;
  kills: number;
  deaths: number;
  fecha: string;
}

export default function AdminPanel() {
  const [jugador, setJugador] = useState("");
  const [kills, setKills] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [user, setUser] = useState<any>(null);

  // Obtener usuario
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };
    fetchUser();
  }, []);

  // Traer resultados
  const fetchResultados = async () => {
    const { data, error } = await supabase
      .from("resultados")
      .select("*")
      .order("fecha", { ascending: false });

    if (error) {
      console.error("Error cargando resultados:", error);
    } else {
      setResultados(data ?? []);
    }
  };

  useEffect(() => {
    fetchResultados();

    // 📌 Suscripción realtime
    const channel = supabase
      .channel("admin-resultados-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "resultados" },
        (payload) => {
          console.log("Cambio detectado en AdminPanel:", payload);

          if (payload.eventType === "INSERT") {
            setResultados((prev) => [payload.new as Resultado, ...prev]);
          }

          if (payload.eventType === "DELETE") {
            setResultados((prev) =>
              prev.filter((r) => r.id !== (payload.old as Resultado).id)
            );
          }

          if (payload.eventType === "UPDATE") {
            setResultados((prev) =>
              prev.map((r) =>
                r.id === (payload.new as Resultado).id
                  ? (payload.new as Resultado)
                  : r
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Guardar resultado
  const handleSave = async () => {
    if (!jugador) return alert("Escribe el nombre del jugador");

    const { error } = await supabase
      .from("resultados")
      .insert([{ jugador, kills, deaths, fecha: new Date().toISOString() }]);

    if (error) {
      console.error("Error guardando:", error);
      alert("Error al guardar resultado");
    } else {
      setJugador("");
      setKills(0);
      setDeaths(0);
      // 🔥 Realtime actualizará automáticamente
    }
  };

  // Borrar resultado
const handleDelete = async (id: number) => {
  console.log("Intentando borrar ID:", id);

  const { data, error } = await supabase
    .from("resultados")
    .delete()
    .eq("id", id)
    .select(); // 👈 esto va pegado a la cadena, no suelto

  if (error) {
    console.error("Error borrando:", error);
    alert("No se pudo borrar el resultado");
  } else {
    console.log("Borrado con éxito:", data);
    // actualizar localmente para que desaparezca al instante
    setResultados((prev) => prev.filter((r) => r.id !== id));
  }
};

  // Cerrar sesión
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-2xl mt-12 mx-auto">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Panel de Administración
      </h2>

      {user && (
        <Button onClick={handleLogout} className="mb-4">
          Cerrar sesión
        </Button>
      )}

      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Jugador"
          value={jugador}
          onChange={(e) => setJugador(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-green-400"
        />
        <input
          type="number"
          placeholder="Kills"
          value={kills}
          onChange={(e) => setKills(Number(e.target.value))}
          className="p-2 rounded bg-gray-800 text-white border border-green-400"
        />
        <input
          type="number"
          placeholder="Deaths"
          value={deaths}
          onChange={(e) => setDeaths(Number(e.target.value))}
          className="p-2 rounded bg-gray-800 text-white border border-green-400"
        />
        <Button onClick={handleSave}>Guardar Resultado</Button>
      </div>

      <h3 className="text-xl font-bold text-green-400 mb-2">
        Últimos Resultados
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-400 text-left">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-6 py-3">Jugador</th>
              <th className="px-6 py-3">Kills</th>
              <th className="px-6 py-3">Deaths</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-gray-300">
            {resultados.map((res) => (
              <tr key={res.id}>
                <td className="px-6 py-3">{res.jugador}</td>
                <td className="px-6 py-3">{res.kills}</td>
                <td className="px-6 py-3">{res.deaths}</td>
                <td className="px-6 py-3">
                  {new Date(res.fecha).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  <button
                    className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded text-white font-bold"
                      onClick={() => {
                        console.log("Clic en borrar ID:", res.id);
                        handleDelete(res.id);
                          }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
