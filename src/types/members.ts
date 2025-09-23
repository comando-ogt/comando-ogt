export type MemberRole = "commander" | "officer" | "infantry" | "none";
export type MemberDivision =
  | "commander"
  | "defense"
  | "infOne"
  | "infTwo"
  | "infThree"
  | "recon"
  | "tank"
  | "flex"
  | "none";

export interface Member {
  id: string;
  avatar: string;
  name: string;
  role: MemberRole;
  quote: string;
  bio: string;
  division: MemberDivision;
  stats: {
    preferredRole: string;
    k: number;
    d: number;
  };
}
