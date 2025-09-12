export default function Competitivo() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10">
      <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg mb-10 text-center">
        Equipo Competitivo - Comando OGT
      </h1>

      {/* Presentación */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300">
          Nuestro equipo competitivo de Hell Let Loose representa la disciplina, estrategia y
          coordinación de Comando OGT. Aquí puedes ver a nuestros jugadores, su rol y desempeño.
        </p>
      </div>

      {/* Cards de jugadores */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 border border-green-400 p-6 rounded-3xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-red-400 mb-2">Player1</h3>
          <p className="text-gray-300">Rol: Líder de Escuadra</p>
          <p className="text-gray-400">K/D Ratio: 1.8</p>
        </div>
        <div className="bg-gray-800 border border-green-400 p-6 rounded-3xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-red-400 mb-2">Player2</h3>
          <p className="text-gray-300">Rol: Infantería</p>
          <p className="text-gray-400">K/D Ratio: 1.2</p>
        </div>
        <div className="bg-gray-800 border border-green-400 p-6 rounded-3xl shadow-2xl hover:-translate-y-2 hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-red-400 mb-2">Player3</h3>
          <p className="text-gray-300">Rol: Tanquista</p>
          <p className="text-gray-400">K/D Ratio: 2.0</p>
        </div>
      </div>

      {/* Tabla de desempeño */}
      <div className="overflow-x-auto mb-16">
        <table className="min-w-full text-left border border-green-400">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-6 py-3">Evento</th>
              <th className="px-6 py-3">Mapa</th>
              <th className="px-6 py-3">Resultado</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-gray-300">
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-3">Scrim vs LATAM</td>
              <td className="px-6 py-3">Carentan</td>
              <td className="px-6 py-3 text-green-400 font-bold">Victoria</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-3">Scrim vs MX</td>
              <td className="px-6 py-3">Stalingrad</td>
              <td className="px-6 py-3 text-red-400 font-bold">Derrota</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
