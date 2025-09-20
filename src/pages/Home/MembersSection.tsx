import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/Button";
import { MemberCard } from "../../components/MemberCard";

interface Member {
  avatarSrc: string;
  name: string;
  role: string;
  quote: string;
  borderColorClass: string;
  textColorClass: string;
  bio: string;
  stats: {
    PreferredRole: string;
    K: number;
    D: number;
  };
}

// Miembros principales
const mainMembers: Member[] = [
  {
    avatarSrc: "https://placehold.co/150x150/006847/FFFFFF?text=AVATAR",
    name: "smiLk",
    role: "Comandante",
    quote: "Mantengan su carril.",
    borderColorClass: "border-ogt-green",
    textColorClass: "text-ogt-green",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/F5F5DC/121212?text=AVATAR",
    name: "Santi",
    role: "Líder de Defensa",
    quote:
      "Necesito que todos los de defensa sepamos donde estemos y donde vamos a estar",
    borderColorClass: "border-green-500",
    textColorClass: "text-green-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CE1126/FFFFFF?text=AVATAR",
    name: "Figueroa",
    role: "Líder de Infantería 1",
    quote: "Nah, basta que con el principio hagamos bien las cosas",
    borderColorClass: "border-yellow-500",
    textColorClass: "text-yellow-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "KiwiQ",
    role: "Líder de Infantería 2",
    quote: "Es mucho pedo estar oyendo tanta pendejada",
    borderColorClass: "border-ogt-red",
    textColorClass: "text-ogt-red",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Calitzu",
    role: "Líder de Infantería 3",
    quote: "Vayan entrando gente",
    borderColorClass: "border-blue-500",
    textColorClass: "text-blue-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Scripteddrama",
    role: "Líder de Recon",
    quote:
      "La norma del internet es que toda chica es hombre hasta demostrar lo contrario",
    borderColorClass: "border-purple-500",
    textColorClass: "text-purple-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Donato",
    role: "Líder de Tanques",
    quote: "Hablan solos los líderes de escuadrón",
    borderColorClass: "border-teal-500",
    textColorClass: "text-teal-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "CytrusMG",
    role: "Líder de Flex",
    quote: "Hagan tutorial de conquistar mamás solteras",
    borderColorClass: "border-orange-500",
    textColorClass: "text-orange-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
];

// Resto del equipo
const otherMembers: Member[] = [
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Calitzu",
    role: "Líder de Infantería 3",
    quote: "Vayan entrando gente",
    borderColorClass: "border-blue-500",
    textColorClass: "text-blue-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Scripteddrama",
    role: "Líder de Recon",
    quote:
      "La norma del internet es que toda chica es hombre hasta demostrar lo contrario",
    borderColorClass: "border-purple-500",
    textColorClass: "text-purple-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Donato",
    role: "Líder de Tanques",
    quote: "Hablan solos los líderes de escuadrón",
    borderColorClass: "border-teal-500",
    textColorClass: "text-teal-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "CytrusMG",
    role: "Líder de Flex",
    quote: "Hagan tutorial de conquistar mamás solteras",
    borderColorClass: "border-orange-500",
    textColorClass: "text-orange-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    stats: { PreferredRole: "Unknown", K: 0, D: 0 },
  },
];

export function MembersSection() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleMemberClick = () => {};

  return (
    <section id="members" className="py-20">
      <div className="mx-auto px-6 container">
        <h2 className="font-staatliches text-white text-4xl text-center">
          Comando Central
        </h2>
        <div className="section-title-underline flag-gradient-bg"></div>

        {/* Cuadrícula principal */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {mainMembers.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              onClick={handleMemberClick}
            />
          ))}
        </div>

        {/* Botón modal */}
        <div className="flex justify-center">
          <Button className="mx-auto mt-12" onClick={() => setShowModal(true)}>
            Ver el resto del equipo
          </Button>
        </div>
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 rounded-2xl shadow-lg p-8 w-11/12 max-w-5xl relative max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Logo del equipo */}
              <div className="flex justify-center mb-4">
                <img
                  src="/OGT_2.png" // <-- cambia esta ruta por tu logo real
                  alt="Logo del equipo"
                  className="w-28 h-28 object-contain"
                />
              </div>

              {/* Título */}
              <h3 className="text-white text-3xl text-center mb-6 font-staatliches">
                Equipo Competitivo
              </h3>

              {/* Resto de miembros */}
              <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {otherMembers.map((member) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    onClick={handleMemberClick}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
