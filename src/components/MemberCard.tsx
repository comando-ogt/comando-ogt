import clsx from "clsx";

interface Member {
  avatarSrc: string;
  name: string;
  role: string;
  quote: string;
  borderColorClass: string;
  textColorClass: string;
}

interface Props {
  member: Member;
  onClick: (member: Member) => void;
}

export function MemberCard({ member, onClick }: Props) {
  return (
    <div
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
      onClick={() => onClick(member)}
    >
      <img
        src={member.avatarSrc}
        alt={`${member.name}'s Avatar`}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${member.borderColorClass}`}
      />
      <h3 className="font-staatliches text-white text-2xl">{member.name}</h3>
      <p className={`font-semibold ${member.textColorClass}`}>{member.role}</p>
      <p className="mt-2 text-gray-400">"{member.quote}"</p>
    </div>
  );
}
