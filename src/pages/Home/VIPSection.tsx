import { useState } from "react";
import { Button } from "../../components/Button";
import VipModal from "../../components/VipModal";

export function VIPSection() {
  const [openVIP, setOpenVIP] = useState(false);

  return (
    <section id="vip" className="bg-neutral-900 py-20">
      <div className="mx-auto px-6 text-center container">
        <h2 className="text-white text-4xl text-center">ZONA VIP</h2>
        <div className="mx-auto mb-4 w-2xs h-1 flag-gradient-bg" />
        <div className="mx-auto mt-8 max-w-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 w-20 h-20 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-gray-300 text-lg">
            Accede a beneficios exclusivos como slots reservados, insignias en
            Discord y acceso a eventos privados.
          </p>
          <Button className="mt-8" variant="yellow" onClick={() => setOpenVIP(true)}>
            Conviértete en VIP
          </Button>
        </div>
      </div>

      {/* Modal */}
      <VipModal isOpen={openVIP} onClose={() => setOpenVIP(false)} />
    </section>
  );
}
