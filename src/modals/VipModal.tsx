import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../components/Dialog";

import { useState, type ReactNode } from "react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

interface Props {
  children: ReactNode;
}

export function VipModal({ children }: Props) {
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

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent title="Acceso VIP" description="VIP" className="space-y-4">
        <p className="text-neutral-300 text-sm">
          Al adquirir tu{" "}
          <span className="font-semibold text-yellow-400">VIP</span>, te
          despides de las colas y avanzas directamente al campo de batalla. 🚀
        </p>
        <p className="text-neutral-400 text-sm">
          Complete los campos a continuación para generar su enlace de pago.
          Asegúrese de ingresar correctamente su{" "}
          <span className="font-medium">ID de Steam</span> para jugadores de
          Steam o su <span className="font-medium">ID de GamePass</span> para
          jugadores de Microsoft, junto con el{" "}
          <span className="font-medium">correo electrónico</span>.
        </p>

        <label className="block text-sm">ID de Steam o GamePass</label>
        <TextInput
          type="text"
          value={steamID}
          onChange={(e) => setSteamID(e.target.value)}
          placeholder="Pega el ID aquí"
        />

        <label className="block text-sm">Correo electrónico</label>
        <TextInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu correo"
        />

        {error && <p className="text-red-500">{error}</p>}

        {/* Condiciones de compra */}
        <div className="bg-neutral-800 mb-4 p-3 border border-neutral-700 rounded-md text-neutral-400 text-xs">
          <h3 className="mb-2 font-semibold text-yellow-400 text-sm">
            Condiciones para comprar VIP:
          </h3>
          <ul className="space-y-1 list-disc list-inside">
            <li>
              El usuario debe haber jugado al menos 1 vez en el servidor
              (parecer activo).
            </li>
            <li>
              Las identificaciones no encontradas o no válidas no pueden
              continuar con la compra.
            </li>
            <li>
              Tras confirmar la compra,{" "}
              <span className="font-semibold text-white">
                cree un ticket en nuestro Discord
              </span>{" "}
              en el apartado
              <span className="font-semibold text-yellow-400">
                {" "}
                Info VIP
              </span>{" "}
              mediante el siguiente enlace:{" "}
              <a
                href="https://discord.gg/TU-LINK-DE-DISCORD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Ir a Discord
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <Button onClick={generarLink} variant="yellow">
            Generar Link de Pago
          </Button>
          <DialogClose asChild>
            <Button variant="gray">Cerrar</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
