import {
  getDivisionColor,
  getRankColor,
  getRankToRango,
} from "../../utils/colors";

import { Avatar } from "../../components/Avatar";
import { FlagBar } from "../../components/FlagBar";
import type { Member } from "../../types/members";
import clsx from "clsx";
import { getKDR } from "../../utils/profile";

interface Props {
  member: Member;
}

export function Profile({ member }: Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="flex-shrink-0">
          <Avatar
            src={member.avatar}
            name={member.name}
            size="2xl"
            className={clsx(
              "mx-auto",
              "mb-4",
              "border-8",
              `border-${getDivisionColor(member.division)}`
            )}
          />
        </div>
        <div className="md:text-left text-center">
          <h1 className="text-white text-5xl">{member.name}</h1>
          <p
            className={`text-2xl font-semibold text-${getRankColor(
              member.rank
            )}`}
          >
            {getRankToRango(member.rank)}
          </p>
          <p className="mt-2 text-gray-400 text-lg italic">"{member.quote}"</p>
        </div>
      </div>
      <FlagBar className="my-8 w-full" />
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-white text-3xl">Registro de servicio</h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {member.bio}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-white text-3xl">Estadísticas</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-between bg-neutral-900 p-2 rounded">
              <span className="font-bold">Asesinatos:</span>
              <span>{member.kills}</span>
            </li>
            <li className="flex justify-between bg-neutral-900 p-2 rounded">
              <span className="font-bold">Muertes:</span>
              <span>{member.deaths}</span>
            </li>
            <li className="flex justify-between bg-neutral-900 p-2 rounded">
              <span className="font-bold">KDR:</span>
              <span>{getKDR(member.kills, member.deaths)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="mb-4 text-white text-3xl">Premios y reconocimientos</h3>
        <div className="space-y-4">
          {member.medals &&
            member.medals.map((medal, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-neutral-900 p-4 border-yellow-400 border-l-4 rounded-lg"
              >
                <img src={`/medals/${medal.icon}`} alt={`${medal.name}`} />
                <div>
                  <h4 className="font-bold text-white text-lg">{medal.name}</h4>
                  <p className="text-gray-400">{medal.description}</p>
                </div>
              </div>
            ))}
          {(!member.medals || member.medals.length === 0) && (
            <p className="text-gray-400">
              Aún no ha recibido ninguna condecoración.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
