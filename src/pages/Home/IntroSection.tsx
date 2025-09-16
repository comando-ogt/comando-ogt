import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../components/Dialog";

import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { MainSection } from "../../components/MainSection";

export function IntroSection() {
  return (
    <MainSection className="h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="drop-shadow-lg mb-4 font-bold text-white text-6xl md:text-7xl tracking-widest">
          COMANDO OGT
        </h1>
        <div className="mb-4 w-xl h-1 flag-gradient-bg"></div>
        <p className="mb-8 text-gray-300 text-lg md:text-2xl">
          Hell Let Loose LATAM | Equipo Competitivo & Comunidad
        </p>
        <div className="flex gap-4">
          <Link
            href="https://discord.com/invite/WmB3kPB35j"
            target="_blank"
            asButton
          >
            Únete a nuestro Discord
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="red">Inscribirme</Button>
            </DialogTrigger>
            <DialogContent
              title="Formulario de Inscripción"
              description="Agrega tu información aquí para unirse a nuestro equipo"
            >
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nombre de Jugador"
                  className="bg-black p-2 border border-green-400 rounded text-white"
                />
                <select className="bg-black p-2 border border-green-400 rounded text-white">
                  <option>Infantería</option>
                  <option>Competitivo</option>
                  <option>VIP</option>
                </select>
                <input
                  type="email"
                  placeholder="Correo"
                  className="bg-black p-2 border border-green-400 rounded text-white"
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
