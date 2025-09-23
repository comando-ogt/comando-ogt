import { FlagBar } from "../../components/FlagBar";
import { ListMemberCard } from "./ListMemberCard";
import { membersData } from "../../utils/testData";

const members = membersData;

export function Miembros() {
  return (
    <main className="flex-1">
      <div className="mx-auto p-6 container">
        <div className="bg-neutral-800 shadow-lg p-8 md:p-12 rounded-lg">
          <h1 className="text-white text-5xl text-center">Miembros</h1>
          <FlagBar className="my-4 w-full md:w-2xs" />
          <div className="mx-auto section-title-underline flag-gradient-bg"></div>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {members.map((member) => (
              <ListMemberCard member={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
