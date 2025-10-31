import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import { RegularPageLayout } from "../../layouts/RegularPage";
import { supabase } from "../../supabase";
import type { Member } from "../../types/members";
import { profileColumns } from "../../utils/profile";
import { Loading } from "./Loading";
import { Profile } from "./Profile";

export function Member() {
  const { memberUrl } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const { data, error } = await supabase
      .from("profiles")
      .select(profileColumns)
      .eq("member_url", memberUrl)
      .single();

    // TODO: reroute to a page showing that the member was not found
    if (error) {
      navigate("/404");

      return;
    }

    // TODO: add rewards

    const memberFromData: Member = {
      avatar: data.avatar_url ?? "",
      name: data.discord_username.replace(/^OGT(\s*(\||丨)?)?/i, ""),
      rank: data.rank,
      quote: data.quote,
      bio: data.bio,
      division: data.division,
      kills: data.total_kills,
      deaths: data.total_deaths,
      url: data.member_url,
      medals: [],
    };

    setMember(memberFromData);

    setLoading(false);
  }

  return (
    <RegularPageLayout>
      {loading && <Loading />}
      {member && <Profile member={member} />}
    </RegularPageLayout>
  );
}
