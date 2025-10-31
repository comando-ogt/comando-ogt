export const profileColumns =
  "discord_username, hll_username, membership_status, web_role, avatar_url, rank, division, quote, bio, member_url, total_kills, total_deaths";

export interface DBProfile {
  avatar_url: string | null;
  bio: string | null;
  discord_username: string;
  division: string | null;
  hll_level: number;
  hll_username: string;
  member_url: string;
  membership_status: string;
  quote: string | null;
  rank: string | null;
  total_deaths: number;
  total_kills: number;
  updated_at: string | null;
  user_id: string;
  web_role: string;
}

export function getKDR(kills: number, deaths: number): string {
  if (deaths === 0) return "1.00";

  return (kills / deaths).toFixed(2);
}
