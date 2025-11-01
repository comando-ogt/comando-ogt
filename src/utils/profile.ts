export const profileColumns =
  "avatar_url,bio,discord_username,division,hll_level,hll_username,member_url,membership_status,quote,rank,total_deaths,total_kills,created_at,user_id,web_role";

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
