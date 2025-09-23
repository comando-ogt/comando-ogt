import type { MemberDivision, MemberRole } from "../types/members";

export function getRoleColor(role: MemberRole): string {
  switch (role) {
    case "commander":
      return "ogt-green";
    case "officer":
      return "ogt-red";
    default:
      return "white";
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
