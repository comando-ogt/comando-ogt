import { MainSection } from "../components/MainSection";

export function NotFound() {
  return (
    <MainSection
      className="flex-1"
      contentClassName="flex flex-col justify-center items-center"
    >
      <h1 className="drop-shadow-lg font-bold text-white text-4xl">404</h1>
      <p className="drop-shadow-lg font-semibold text-gray-300 text-xl text-center">
        La recon no encontró ninguna página por aca, quizás la artillería la
        exploto.
      </p>
    </MainSection>
  );
}
