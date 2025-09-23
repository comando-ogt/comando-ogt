import {
  faDiscord,
  faInstagram,
  faTwitch,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../components/Link";

export function SocialsSection() {
  return (
    <section className="bg-black p-12 text-center">
      <h2 className="mb-2 text-white text-4xl text-center">Síguenos</h2>
      <div className="mx-auto mb-4 w-2xs h-1 flag-gradient-bg" />
      <div className="flex justify-center gap-6">
        <Link href="https://discord.com/invite/WmB3kPB35j">
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faTwitch} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
      </div>
    </section>
  );
}
