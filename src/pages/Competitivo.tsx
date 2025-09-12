import { MainSection } from "../components/MainSection";
import clsx from "clsx";

const EVENTS = [
  {
    name: "Scrim vs LATAM",
    map: "Carentan",
    result: "Win",
  },
  {
    name: "Scrim vs MX",
    map: "Stalingrad",
    result: "Loss",
  },
  /* {
    name: "Scrim vs Test1",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test2",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test3",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test4",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test1",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test2",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test3",
    map: "Test",
    result: "Win",
  },
  {
    name: "Scrim vs Test4",
    map: "Test",
    result: "Win",
  }, */
];

export function Competitivo() {
  return (
    <main className="relative flex flex-col flex-1">
      <MainSection className="flex flex-1 justify-center items-center">
        <h1 className="drop-shadow-lg my-10 font-bold text-green-400 text-5xl text-center">
          Equipo Competitivo - Comando OGT
        </h1>

        {/* Presentación */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-gray-300 text-lg">
            Nuestro equipo competitivo de Hell Let Loose representa la
            disciplina, estrategia y coordinación de Comando OGT. Aquí puedes
            ver a nuestros jugadores, su rol y desempeño.
          </p>
        </div>

        {/* Cards de jugadores */}
        <div className="gap-8 grid md:grid-cols-3 mb-16">
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2">
            <h3 className="mb-2 font-bold text-red-400 text-2xl">Player1</h3>
            <p className="text-gray-300">Rol: Líder de Escuadra</p>
            <p className="text-gray-400">K/D Ratio: 1.8</p>
          </div>
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2">
            <h3 className="mb-2 font-bold text-red-400 text-2xl">Player2</h3>
            <p className="text-gray-300">Rol: Infantería</p>
            <p className="text-gray-400">K/D Ratio: 1.2</p>
          </div>
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2">
            <h3 className="mb-2 font-bold text-red-400 text-2xl">Player3</h3>
            <p className="text-gray-300">Rol: Tanquista</p>
            <p className="text-gray-400">K/D Ratio: 2.0</p>
          </div>
        </div>

        {/* Tabla de desempeño */}
        <div className="mb-16 overflow-x-auto">
          <table className="border border-green-400 min-w-full text-left">
            <thead className="bg-green-600 text-black">
              <tr>
                <th className="px-6 py-3">Evento</th>
                <th className="px-6 py-3">Mapa</th>
                <th className="px-6 py-3">Resultado</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-gray-300">
              {EVENTS.map((event, i) => (
                <tr className={i % 2 === 0 ? "bg-gray-800" : "bg-gray-800"}>
                  <td className="px-6 py-3">{event.name}</td>
                  <td className="px-6 py-3">{event.map}</td>
                  <td
                    className={clsx(
                      "px-6",
                      "py-3",
                      "font-bold",
                      event.result === "win" ? "text-green-400" : "text-red-400"
                    )}
                  >
                    {event.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainSection>
    </main>
  );
}
