import { useEffect, useState } from "react";

import { FlagBar } from "../../components/FlagBar";
import { ListMemberCard } from "./ListMemberCard";
import type { Member } from "../../types/members";
import { RegularPageLayout } from "../../layouts/RegularPage";
import { profileColumns } from "../../utils/profile";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router";

export function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // TODO: add loading ui
  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    const { data, error } = await supabase
      .from("profiles")
      .select(profileColumns);

    // TODO: reroute to a page showing that the members were not found
    if (error) {
      navigate("/404");

      return;
    }

    const membersFromData: Member[] = [];

    data?.forEach((member) => {
      membersFromData.push({
        avatar: member.avatar_url ?? "",
        name: member.discord_username.replace(/^OGT(\s*(\||丨)?)?/i, ""),
        rank: member.rank,
        quote: member.quote,
        bio: member.bio,
        division: member.division,
        kills: member.total_kills,
        deaths: member.total_deaths,
        url: member.member_url,
        medals: [],
      });
    });

    setMembers(membersFromData);

    setLoading(false);
  }

  return (
    <RegularPageLayout>
      <h1 className="text-white text-5xl text-center">Miembros</h1>
      <FlagBar className="my-4 w-full md:w-2xs" />
      <div className="mx-auto section-title-underline flag-gradient-bg"></div>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
        {members.map((member) => (
          <ListMemberCard key={member.url} member={member} />
        ))}
      </div>
    </RegularPageLayout>
  );
}
