import { MainSection } from "../components/MainSection";

export function Contacto() {
  return (
    <main className="relative flex flex-col flex-1">
      <MainSection className="flex flex-1 justify-center items-center">
        <h1 className="drop-shadow-lg mb-10 font-bold text-green-400 text-5xl text-center">
          Contacto
        </h1>

        <div className="mx-auto max-w-2xl">
          <form
            action="https://formspree.io/f/mzzalkja"
            method="POST"
            className="space-y-6 bg-gray-800 shadow-2xl p-8 border border-green-400 rounded-3xl"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="bg-black p-3 border border-green-400 rounded w-full text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="bg-black p-3 border border-green-400 rounded w-full text-white"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              rows={5}
              required
              className="bg-black p-3 border border-green-400 rounded w-full text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 shadow-xl px-6 py-3 rounded-2xl w-full font-bold text-black"
            >
              Enviar
            </button>
          </form>
        </div>
      </MainSection>
    </main>
  );
}
