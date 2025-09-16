import { Button } from "../../components/Button";
import { MemberCard } from "../../components/MemberCard";

const members = [
  {
    avatarSrc: "https://placehold.co/150x150/006847/FFFFFF?text=AVATAR",
    name: "smiLk",
    role: "Comandante",
    quote: "Mantengan su carril.",
    borderColorClass: "border-ogt-green",
    textColorClass: "text-ogt-green",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/F5F5DC/121212?text=AVATAR",
    name: "Santi",
    role: "Líder de Defensa",
    quote:
      "Necesito que todos los de defensa sepamos donde estemos y donde vamos a estar",
    borderColorClass: "border-green-500",
    textColorClass: "text-green-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CE1126/FFFFFF?text=AVATAR",
    name: "Figueroa",
    role: "Líder de Infantería 1",
    quote: "Nah, basta que con el principio hagamos bien las cosas",
    borderColorClass: "border-yellow-500",
    textColorClass: "text-yellow-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "KiwiQ",
    role: "Líder de Infantería 2",
    quote: "es mucho pedo estar oyendo tanta pendejada",
    borderColorClass: "border-ogt-red",
    textColorClass: "text-ogt-red",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Calitzu",
    role: "Líder de Infantería 3",
    quote: "vayan entrando  gente",
    borderColorClass: "border-blue-500",
    textColorClass: "text-blue-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Scripteddrama",
    role: "Líder de Recon",
    quote:
      "la norma del internet es q toda chica es hombre hasta demostrar lo contrario",
    borderColorClass: "border-purple-500",
    textColorClass: "text-purple-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "Donato",
    role: "Líder de Tanques",
    quote: "hablan solos los lideres de escuadron",
    borderColorClass: "border-teal-500",
    textColorClass: "text-teal-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
  {
    avatarSrc: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    name: "CytrusMG",
    role: "Líder de Flex",
    quote: "Hagan tutorial de conquistar mamás solteras",
    borderColorClass: "border-orange-500",
    textColorClass: "text-orange-500",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.`,
    stats: {
      PreferredRole: "Unknown",
      K: 0,
      D: 0,
    },
  },
];

export function MembersSection() {
  const handleMemberClick = () => {};

  return (
    <section id="members" className="py-20">
      <div className="mx-auto px-6 container">
        <h2 className="font-staatliches text-white text-4xl text-center">
          Comando Central
        </h2>
        <div className="section-title-underline flag-gradient-bg"></div>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              onClick={handleMemberClick}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mx-auto mt-12" onClick={() => {}}>
          Ver el resto del equipo
        </Button>
      </div>
    </section>
  );
}
