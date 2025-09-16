import { Link } from "../../components/Link";

export function SocialsSection() {
  return (
    <section className="bg-black p-12 text-center">
      <h2 className="mb-2 text-white text-4xl text-center">Síguenos</h2>
      <div className="mx-auto mb-4 w-2xs h-1 flag-gradient-bg" />
      <div className="flex justify-center gap-6">
        <Link href="https://discord.com/invite/WmB3kPB35j">Discord</Link>
        <Link href="#">YouTube</Link>
        <Link href="#">Twitch</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Twitter/X</Link>
      </div>
    </section>
  );
}
