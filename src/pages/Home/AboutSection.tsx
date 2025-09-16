export function AboutSection() {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto px-6 max-w-6xl container">
        <h2 className="text-white text-4xl text-center">Nuestra Misión</h2>
        <div className="mx-auto mb-4 w-2xs h-1 flag-gradient-bg" />
        <div className="flex md:flex-row flex-col justify-center items-center gap-12 mt-12">
          <div className="md:w-1/2">
            <img
              src="team.jpg"
              alt="Team Photo"
              className="shadow-lg rounded-lg w-full"
            />
          </div>
          <div className="space-y-4 md:w-1/2 text-gray-300 text-lg">
            <p>
              Somos el <span className="font-bold text-white">COMANDO OGT</span>
              , un clan de Hell Let Loose forjado en el calor de la batalla.
              Nuestro núcleo es la estrategia, la comunicación y el respeto
              mutuo. No solo jugamos, dominamos el frente con tácticas
              coordinadas y un espíritu inquebrantable.
            </p>
            <p>
              Cada victoria es un testimonio de nuestra unidad y dedicación.
            </p>
            <ul className="space-y-2 mt-4 list-none">
              <li className="flex items-center">
                <span className="mr-2 font-bold text-ogt-green text-2xl">
                  ✓
                </span>{" "}
                Estrategia y Comunicación
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-bold text-white text-2xl">✓</span>{" "}
                Comunidad Activa y Respetuosa
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-bold text-ogt-red text-2xl">✓</span>{" "}
                Eventos y Partidas Competitivas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
