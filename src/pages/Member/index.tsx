import { useEffect, useState } from "react";

import { useParams } from "react-router";
import type { Member } from "../../types/members";
import { membersData } from "../../utils/testData";
import { Loading } from "./Loading";
import { Profile } from "./Profile";

const members = membersData;

export function Member() {
  const { memberId } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (memberId) {
        setMember(members[parseInt(memberId)]);
      }
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex-1">
      <div className="mx-auto p-6 container">
        <div className="bg-neutral-800 shadow-lg p-8 md:p-12 rounded-lg">
          {loading && <Loading />}
          {member && <Profile member={member} />}
        </div>
      </div>
    </main>
  );
}
