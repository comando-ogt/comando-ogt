import type { MemberDivision, MemberRank } from "../types/members";

export function getRankColor(rank: MemberRank): string {
  switch (rank) {
    case "general":
    case "colonel":
    case "major":
      return "ogt-green";
    case "captain":
    case "lieutenant":
    case "cadet":
    case "sergeant":
      return "ogt-red";
    case "corporal":
    case "private":
    case "recruit":
      return "white";
    case "merc":
      return "blue";
  }
}

export function getDivisionColor(division: MemberDivision): string {
  switch (division) {
    case "commander":
      return "ogt-green";
    case "defense":
      return "green-500";
    case "infOne":
      return "yellow-500";
    case "infTwo":
      return "red-500";
    case "infThree":
      return "blue-500";
    case "recon":
      return "purple-500";
    case "tank":
      return "teal-500";
    case "flex":
      return "orange-500";
    default:
      return "gray-500";
  }
}

export function getRankToRango(rank: MemberRank): string {
  switch (rank) {
    case "general":
      return "General";
    case "colonel":
      return "Coronel";
    case "major":
      return "Mayor";
    case "captain":
      return "Capitán";
    case "lieutenant":
      return "Teniente";
    case "cadet":
      return "Cadete";
    case "sergeant":
      return "Sargento";
    case "corporal":
      return "Cabo";
    case "private":
      return "Soldado";
    case "recruit":
      return "Recluta";
    case "merc":
      return "Mercenario";
  }
}
