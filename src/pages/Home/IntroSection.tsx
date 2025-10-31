import { FlagBar } from "../../components/FlagBar";
import { Link } from "../../components/Link";
import { MainSection } from "../../components/MainSection";

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
        </div>
      </div>
    </MainSection>
  );
}
