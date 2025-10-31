import {
  getDivisionColor,
  getRankColor,
  getRankToRango,
} from "../../utils/colors";

import { Avatar } from "../../components/Avatar";
import type { Member } from "../../types/members";
import clsx from "clsx";
import { getKDR } from "../../utils/profile";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

interface Props {
  member: Member;
}

export function ListMemberCard({ member }: Props) {
  let navigate = useNavigate();

  const kd = parseFloat(getKDR(member.kills, member.deaths));

  return (
    <motion.div
      key={member.name}
      className={clsx(
        "flex",
        "items-center",
        "justify-between",
        "gap-2",
        "bg-neutral-950",
        "shadow-lg",
        "p-3",
        "card-member-border",
        "rounded-lg",
        "transition-transform",
        "hover:-translate-y-2",
        "duration-300",
        "cursor-pointer",
        "transition"
      )}
      onClick={() => navigate(`/miembro/${member.url}`)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.25,
          },
        },
      }}
    >
      <div className="flex items-center gap-2">
        <Avatar
          src={member.avatar}
          name={member.name}
          className={clsx(
            "border-2",
            `border-${getDivisionColor(member.division)}`
          )}
        />
        <div>
          <p className="font-bold text-white">{member.name}</p>
          <p className={`text-${getRankColor(member.rank)} text-sm`}>
            {getRankToRango(member.rank)}
          </p>
        </div>
      </div>
      <div>
        <p
          className={clsx(
            "font-bold",
            "text-lg",
            kd < 0.5 ? "text-ogt-red" : "text-ogt-green"
          )}
        >
          {kd.toFixed(2)}
        </p>
        <p className="text-gray-300 text-xs text-center">KD</p>
      </div>
    </motion.div>
  );
}
