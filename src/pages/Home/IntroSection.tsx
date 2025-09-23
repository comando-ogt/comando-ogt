import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../components/Dialog";

import { Button } from "../../components/Button";
import { FlagBar } from "../../components/FlagBar";
import { Link } from "../../components/Link";
import { MainSection } from "../../components/MainSection";
import { TextInput } from "../../components/TextInput";

export function IntroSection() {
  return (
    <MainSection>
      <div className="flex flex-col justify-center items-center mx-auto px-6 h-[calc(100vh-64px)] text-center container">
        <h1 className="drop-shadow-lg mb-4 font-bold text-white text-6xl md:text-7xl tracking-widest">
          COMANDO OGT
        </h1>
        <FlagBar className="w-full md:w-xl" />
        <p className="mb-8 text-gray-300 text-lg md:text-2xl">
          Hell Let Loose LATAM | Equipo Competitivo & Comunidad
        </p>
        <div className="flex md:flex-row flex-col gap-4">
          {/* Botón de Discord */}
          <Link
            href="https://discord.com/invite/WmB3kPB35j"
            target="_blank"
            asButton
            className="px-6 py-3"
          >
            Únete a nuestro Discord
          </Link>

          {/* Botón Inscribirme con modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="red" className="px-6 py-3">
                Inscribirme
              </Button>
            </DialogTrigger>

            <DialogContent
              title="Formulario de Inscripción"
              description="Agrega tu información aquí para unirse a nuestro equipo"
            >
              <form
                className="flex flex-col gap-4"
                action="https://formspree.io/f/mzzalkja" // <- reemplaza con tu endpoint
                method="POST"
              >
                <TextInput
                  type="text"
                  name="playerName"
                  placeholder="Nick de Discord"
                  required
                />
                <select
                  name="role"
                  className="bg-neutral-800 p-2 border border-neutral-700 rounded text-white"
                  required
                >
                  <option value="Infantería">Infantería</option>
                  <option value="Competitivo">Competitivo</option>
                  <option value="VIP">VIP</option>
                </select>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Correo"
                  required
                />

                <Button type="submit" className="rounded-lg">
                  Enviar
                </Button>

                <DialogClose asChild>
                  <Button className="rounded-lg" variant="outlineRed">
                    Cancelar
                  </Button>
                </DialogClose>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </MainSection>
  );
}
