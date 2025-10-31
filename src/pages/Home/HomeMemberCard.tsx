import {
  getDivisionColor,
  getRankColor,
  getRankToRango,
} from "../../utils/colors";

import { Avatar } from "../../components/Avatar";
import type { Member } from "../../types/members";
import clsx from "clsx";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const variants = {
  hidden: { scale: 0, rotate: 0, y: 20 },
  visible: {
    rotate: 360,
    scale: 1,
    transition: { delay: 0.2, duration: 0.25 },
  },
};

interface Props {
  member: Member;
}

export function HomeMemberCard({ member }: Props) {
  let navigate = useNavigate();

  return (
    <motion.div
      className={clsx(
        "bg-neutral-900",
        "shadow-lg",
        "p-6",
        "card-member-border",
        "rounded-lg",
        "text-center",
        "transition-transform",
        "hover:-translate-y-2",
        "duration-300",
        "cursor-pointer",
        "transform"
      )}
      onClick={() => navigate(`/miembro/${member.url}`)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
    >
      <Avatar
        src={member.avatar}
        name={member.name}
        size="lg"
        className={clsx(
          "mx-auto",
          "mb-4",
          "border-4",
          `border-${getDivisionColor(member.division)}`
        )}
      />
      <h3 className="text-white text-2xl">{member.name}</h3>
      <p className={`font-semibold text-${getRankColor(member.rank)}`}>
        {getRankToRango(member.rank)}
      </p>
      <p className="mt-2 text-gray-400">"{member.quote}"</p>
    </motion.div>
  );
}
