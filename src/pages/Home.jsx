import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../components/Dialog";

import { Button } from "../components/Button";
import { Link } from "../components/Link";

export function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 h-screen">
        {/* <video
          className="absolute opacity-20 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
        >
          <source src="hll.mp4" />
        </video> */}
        <div className="relative flex flex-col justify-center items-center h-screen">
          <h1 className="drop-shadow-lg mb-4 font-bold text-green-400 text-6xl md:text-7xl tracking-widest">
            COMANDO OGT
          </h1>
          <p className="mb-8 text-gray-300 text-lg md:text-2xl">
            Hell Let Loose LATAM | Equipo Competitivo & Comunidad
          </p>
          <div className="flex gap-4">
            <Link href="#" asButton>
              Unirme al Discord
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
      </section>

      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-12 text-center">
        <h2 className="drop-shadow-lg mb-6 font-bold text-green-400 text-4xl">
          ¿Quiénes Somos?
        </h2>
        <p className="mx-auto max-w-3xl text-gray-300">
          Somos una comunidad dedicada al Hell Let Loose en Latinoamérica.
          Nuestro objetivo es combinar diversión, estrategia y competencia en un
          ambiente militar inmerso.
        </p>
      </section>

      <section className="bg-black p-12 border-green-400 border-t text-center">
        <h2 className="drop-shadow-lg mb-6 font-bold text-red-400 text-4xl">
          Zona VIP
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
          Accede a beneficios exclusivos como slots reservados, insignias en
          Discord y acceso a eventos privados.
        </p>
        <Button variant="yellow">Hazte VIP</Button>
      </section>

      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-12 border-green-400 border-t text-center">
        <h2 className="drop-shadow-lg mb-6 font-bold text-green-400 text-4xl">
          Eventos y Scrims
        </h2>
        <div className="gap-6 grid md:grid-cols-3 mx-auto mb-12 max-w-4xl">
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2 duration-300 transform">
            <h3 className="drop-shadow-lg mb-2 font-bold text-red-400 text-xl">
              Scrim de Entrenamiento
            </h3>
            <p className="text-gray-300">Sábado 8 PM CDMX</p>
          </div>
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2 duration-300 transform">
            <h3 className="drop-shadow-lg mb-2 font-bold text-red-400 text-xl">
              Torneo Regional
            </h3>
            <p className="text-gray-300">Próximamente</p>
          </div>
          <div className="bg-gray-800 shadow-2xl p-6 border border-green-400 rounded-3xl hover:scale-105 transition hover:-translate-y-2 duration-300 transform">
            <h3 className="drop-shadow-lg mb-2 font-bold text-red-400 text-xl">
              Evento Especial VIP
            </h3>
            <p className="text-gray-300">Acceso solo para miembros VIP</p>
          </div>
        </div>
        <div className="mx-auto border border-green-400 rounded-3xl max-w-4xl overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FMexico_City"
            style={{ border: 0 }}
            width="100%"
            height="600"
          ></iframe>
        </div>
      </section>

      <section className="bg-black p-12 border-green-400 border-t text-center">
        <h2 className="drop-shadow-lg mb-6 font-bold text-green-400 text-4xl">
          Síguenos
        </h2>
        <div className="flex justify-center gap-6">
          <Link href="#">Discord</Link>
          <Link href="#">YouTube</Link>
          <Link href="#">Twitch</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter/X</Link>
        </div>
      </section>
    </>
  );
}
