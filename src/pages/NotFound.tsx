export function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 h-screen">
      <h1 className="drop-shadow-lg font-bold text-white text-4xl">404</h1>
      <p className="drop-shadow-lg font-semibold text-green-400 text-xl text-center">
        La recon no encontró ninguna página por aca, quizás la artillería la
        exploto.
      </p>
    </section>
  );
}
