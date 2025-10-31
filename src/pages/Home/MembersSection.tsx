import type { Member, MemberDivision, MemberRank } from "../../types/members";
import { useEffect, useState } from "react";

import type { DBProfile } from "../../utils/profile";
import { FlagBar } from "../../components/FlagBar";
import { HomeMemberCard } from "./HomeMemberCard";
import { Link } from "../../components/Link";
import { motion } from "motion/react";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router";

export function MembersSection() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // TODO: add loading ui
  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    const { data, error } = await supabase.rpc("random_profiles", { count: 8 });

    // TODO: reroute to a page showing that the members were not found
    if (error) {
      console.log(error);

      navigate("/404");

      return;
    }

    const membersFromData: Member[] = [];

    (data as DBProfile[]).forEach((member) => {
      membersFromData.push({
        avatar: member.avatar_url ?? "",
        name: member.discord_username.replace(/^OGT(\s*(\||丨)?)?/i, ""),
        rank: member.rank as MemberRank,
        quote: member.quote ?? "",
        bio: member.bio ?? "",
        division: member.division as MemberDivision,
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
    <section id="members" className="py-20">
      <div className="mx-auto px-6 container">
        <h2 className="text-white text-4xl text-center">Comando Central</h2>
        <FlagBar />
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {members.map((member) => (
            <HomeMemberCard key={member.url} member={member} />
          ))}
        </div>
      </div>
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.25 },
          },
        }}
      >
        <Link className="mx-auto mt-12 py-4" to="/miembros" asButton>
          Ver el resto del equipo
        </Link>
      </motion.div>
    </section>
  );
}
