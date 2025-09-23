import { Button } from "../components/Button";
import { FlagBar } from "../components/FlagBar";
import { TextInput } from "../components/TextInput";

export function Contacto() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="mx-auto p-6">
        <div className="bg-neutral-800 shadow-lg p-8 md:p-12 rounded-lg">
          <h1 className="text-white text-5xl text-center">Contacto</h1>
          <FlagBar className="my-4 w-full md:w-2xs" />

          <form
            action="https://formspree.io/f/mzzalkja"
            method="POST"
            className="space-y-3 max-w-2xl"
          >
            <TextInput
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="bg-neutral-900"
            />
            <TextInput
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="bg-neutral-900"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              rows={5}
              required
              className="bg-neutral-900 p-2 border border-neutral-700 rounded focus:outline-0 w-full"
            />
            <Button type="submit" variant="green" className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
