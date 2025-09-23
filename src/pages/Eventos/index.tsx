import { useEffect, useState } from "react";

import { FlagBar } from "../../components/FlagBar";
import { GameEvent } from "./GameEvent";
import type { GameEvent as GameEventType } from "../../types/events";
import { pastEventsData } from "../../utils/testData";

const events = pastEventsData;

export function Eventos() {
  const [pastEvents, setPastEvents] = useState<GameEventType[]>([]);
  const [futureEvents, setFutureEvents] = useState<GameEventType[]>([]);

  useEffect(() => {
    const now = new Date();
    const past: GameEventType[] = [];
    const future: GameEventType[] = [];

    for (const event of events) {
      if (new Date(event.date) < now) {
        past.push(event);
      } else {
        future.push(event);
      }
    }

    setPastEvents(past);
    setFutureEvents(future);
  }, [events]);

  return (
    <main className="flex-1">
      <div className="mx-auto p-6 container">
        <div className="bg-neutral-800 shadow-lg p-8 md:p-12 rounded-lg">
          <h1 className="text-white text-5xl text-center">Eventos</h1>
          <FlagBar className="my-4 w-full md:w-2xs" />
          <div className="mt-12">
            <h2 className="mb-6 text-white text-4xl">Eventos Próximos</h2>
            <div className="space-y-4">
              {futureEvents.map((event) => (
                <GameEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="mb-6 text-white text-4xl">Eventos Pasados</h2>
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <GameEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
