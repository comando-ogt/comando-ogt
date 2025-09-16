import { AboutSection } from "./AboutSection";
import { IntroSection } from "./IntroSection";
import { MembersSection } from "./MembersSection";
import { SocialsSection } from "./SocialsSection";
import { VIPSection } from "./VIPSection";

export function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <MembersSection />
      <VIPSection />
      <SocialsSection />
    </main>
  );
}
