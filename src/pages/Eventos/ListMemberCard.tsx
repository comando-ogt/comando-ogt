import { getDivisionColor, getRankColor } from "../../utils/colors";

import { Avatar } from "../../components/Avatar";
import type { Member } from "../../types/members";
import clsx from "clsx";
import { useNavigate } from "react-router";

interface Props {
  member: Member;
}

export function ListMemberCard({ member }: Props) {
  let navigate = useNavigate();

  return (
    <div
      key={member.name}
      className={clsx(
        "flex",
        "items-center",
        "gap-3",
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
      onClick={() => navigate(`/miembro/${member.id}`)}
    >
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
        <p className={`text-${getRankColor(member.role)} text-sm`}>
          {member.role}
        </p>
      </div>
    </div>
  );
}
