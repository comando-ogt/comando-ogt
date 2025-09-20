import React from "react";

interface InfantryModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: { name: string; role: string }[];
  teamLogo: string;
}

const InfantryModal: React.FC<InfantryModalProps> = ({ isOpen, onClose, players, teamLogo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-neutral-900 p-6 rounded-xl w-96 text-white shadow-lg">
        {/* Logo del equipo */}
        <div className="flex justify-center mb-4">
          <img src={teamLogo} alt="Team Logo" className="h-16 w-16" />
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">Resto de Infantería</h2>

        {/* Lista de jugadores */}
        <ul className="space-y-2 text-left">
          {players.map((player, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-neutral-800 p-2 rounded"
            >
              <span className="font-medium">{player.name}</span>
              <span className="text-sm text-gray-400">{player.role}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
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

export default InfantryModal;
