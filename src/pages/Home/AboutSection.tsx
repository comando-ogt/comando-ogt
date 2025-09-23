import { FlagBar } from "../../components/FlagBar";
import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 1 },
  }),
};

export function AboutSection() {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto px-6 max-w-6xl container">
        <motion.h2
          className="text-white text-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variants}
          custom={1}
        >
          Nuestra Misión
        </motion.h2>
        <FlagBar />
        <div className="flex md:flex-row flex-col justify-center items-center gap-12 mt-12">
          <div className="md:w-1/2">
            <motion.img
              src="team.jpg"
              alt="Team Photo"
              className="shadow-lg rounded-lg w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={variants}
              custom={2}
            />
          </div>
          <motion.div
            className="space-y-4 md:w-1/2 text-gray-300 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={variants}
            custom={2}
          >
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
              <motion.li
                className="flex items-center"
                viewport={{ once: true, amount: 0.6 }}
                variants={variants}
                custom={3}
              >
                <span className="mr-2 font-bold text-ogt-green text-2xl">
                  ✓
                </span>{" "}
                Estrategia y Comunicación
              </motion.li>
              <motion.li
                className="flex items-center"
                viewport={{ once: true, amount: 0.6 }}
                variants={variants}
                custom={4}
              >
                <span className="mr-2 font-bold text-white text-2xl">✓</span>{" "}
                Comunidad Activa y Respetuosa
              </motion.li>
              <motion.li
                className="flex items-center"
                viewport={{ once: true, amount: 0.6 }}
                variants={variants}
                custom={5}
              >
                <span className="mr-2 font-bold text-ogt-red text-2xl">✓</span>{" "}
                Eventos y Partidas Competitivas
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
