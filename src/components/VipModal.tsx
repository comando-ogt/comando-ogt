import React, { useState } from "react";

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VipModal: React.FC<VipModalProps> = ({ isOpen, onClose }) => {
  const [steamID, setSteamID] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const generarLink = () => {
    if (!steamID.trim() || !email.trim()) {
      setError("⚠️ Debes llenar todos los campos.");
      return;
    }
    setError("");

    const amount = 2.0; // 💲 monto fijo en USD
    const paypalLink = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=camilcar.gm@gmail.com&currency_code=USD&amount=${amount}&item_name=VIP+Acceso&custom=${steamID}|${email}`;

    window.location.href = paypalLink;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-6 rounded-xl w-96 text-white shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">Acceso VIP</h2>
        <p className="mb-4 text-sm text-neutral-300">
          Al adquirir tu <span className="font-semibold text-yellow-400">VIP</span>, 
          te despides de las colas y avanzas directamente al campo de batalla. 🚀
        </p>
        <p className="mb-4 text-sm text-neutral-400">
          Complete los campos a continuación para generar su enlace de pago. 
          Asegúrese de ingresar correctamente su{" "}
          <span className="font-medium">ID de Steam</span> para jugadores de Steam 
          o su <span className="font-medium">ID de GamePass</span> para jugadores de Microsoft, 
          junto con el <span className="font-medium">correo electrónico</span>.
        </p>

        <label className="block text-sm">ID de Steam o GamePass</label>
        <input
          type="text"
          value={steamID}
          onChange={(e) => setSteamID(e.target.value)}
          placeholder="Pega el ID aquí"
          className="w-full p-2 mb-3 rounded bg-neutral-800 border border-neutral-700"
        />

        <label className="block text-sm">Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu correo"
          className="w-full p-2 mb-3 rounded bg-neutral-800 border border-neutral-700"
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Condiciones de compra */}
        <div className="bg-neutral-800 p-3 rounded-md border border-neutral-700 mb-4 text-xs text-neutral-400">
          <h3 className="text-sm font-semibold text-yellow-400 mb-2">
            Condiciones para comprar VIP:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>El usuario debe haber jugado al menos 1 vez en el servidor (parecer activo).</li>
            <li>Las identificaciones no encontradas o no válidas no pueden continuar con la compra.</li>
            <li>
              Tras confirmar la compra, <span className="font-semibold text-white">cree un ticket en nuestro Discord</span> en el apartado 
              <span className="font-semibold text-yellow-400"> Info VIP</span> mediante el siguiente enlace:{" "}
              <a
                href="https://discord.gg/TU-LINK-DE-DISCORD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Ir a Discord
              </a>.
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={generarLink}
            className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500"
          >
            Generar Link de Pago
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VipModal;
