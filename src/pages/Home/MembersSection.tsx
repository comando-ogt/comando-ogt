import { FlagBar } from "../../components/FlagBar";
import { HomeMemberCard } from "./HomeMemberCard";
import { Link } from "../../components/Link";
import { membersData } from "../../utils/testData";
import { motion } from "motion/react";

const members = membersData;

export function MembersSection() {
  return (
    <section id="members" className="py-20">
      <div className="mx-auto px-6 container">
        <h2 className="text-white text-4xl text-center">Comando Central</h2>
        <FlagBar />
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {members
            .filter(
              (member) =>
                member.role === "officer" || member.role === "commander"
            )
            .map((member) => (
              <HomeMemberCard key={member.name} member={member} />
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
        <Link className="mx-auto mt-12 py-3 py-4" to="/miembros" asButton>
          Ver el resto del equipo
        </Link>
      </motion.div>
    </section>
  );
}
