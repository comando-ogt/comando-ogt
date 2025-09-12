export default function Contacto() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-10">
      <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg mb-10 text-center">
        Contacto
      </h1>

      <div className="max-w-2xl mx-auto">
        <form
          action="https://formspree.io/f/mzzpevzn" 
          method="POST"
          className="bg-gray-800 border border-green-400 p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="w-full p-3 rounded bg-black border border-green-400 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-3 rounded bg-black border border-green-400 text-white"
          />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows="5"
            required
            className="w-full p-3 rounded bg-black border border-green-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-2xl shadow-xl w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
