import type { Member, MemberDivision } from "../types/members";

import type { GameEvent } from "../types/events";

const divisions: MemberDivision[] = [
  "defense",
  "infOne",
  "infTwo",
  "infThree",
  "recon",
  "tank",
  "flex",
];

const memberCount = 36;

let currentDivisionIndex = 0;

export const membersData: Member[] = Array(memberCount)
  .fill(null)
  .map((_, index) => ({
    id: index.toString(),
    //avatar: "https://placehold.co/150x150/CCCCCC/121212?text=AVATAR",
    avatar: "",
    name: `Member ${index + 1}`,
    role:
      index === 0
        ? "commander"
        : index > memberCount - 8
        ? "officer"
        : "infantry",
    quote: "lorem ipsum dolor sit amet",
    bio: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    division:
      index === 0
        ? "commander"
        : divisions[currentDivisionIndex++ % divisions.length],
    stats: {
      preferredRole: "unknown",
      k: 0,
      d: 0,
    },
  }));
/*[
  {
    id: "",
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
]; */

export const pastEventsData: GameEvent[] = [
  {
    id: 1,
    date: "2025-08-01",
    title: "Primer partido amistoso",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "Win",
    score: 5,
  },
  {
    id: 2,
    date: "2025-08-02",
    title: "Segundo partido amistoso",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "Loss",
    score: 1,
  },
  {
    id: 3,
    date: "2025-08-03",
    title: "Tercer partido amistoso",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "Win",
    score: 5,
  },
  {
    id: 4,
    date: "2025-08-04",
    title: "Cuarto partido amistoso",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "Loss",
    score: 2,
  },
  {
    id: 5,
    date: "2025-08-05",
    title: "Quinto partido amistoso",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "Win",
    score: 5,
  },
  {
    id: 6,
    date: "2026-08-05",
    title: "Proximo partido",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "None",
    score: 0,
  },
  {
    id: 7,
    date: "2026-08-05",
    title: "Proximo partido",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "None",
    score: 0,
  },
  {
    id: 8,
    date: "2026-08-05",
    title: "Proximo partido",
    opponent: "CTM",
    type: "Juego Amistoso",
    map: "Omaha",
    result: "None",
    score: 0,
  },
];
