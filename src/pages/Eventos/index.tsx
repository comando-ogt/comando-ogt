import { useEffect, useState } from "react";

import type { DBOGTEvent } from "../../types/events";
import { FlagBar } from "../../components/FlagBar";
import { OGTEvent } from "../../components/OGTEvent";
import { RegularPageLayout } from "../../layouts/RegularPage";
import { supabase } from "../../supabase";

export function Eventos() {
  const [pastEvents, setPastEvents] = useState<DBOGTEvent[]>([]);
  const [futureEvents, setFutureEvents] = useState<DBOGTEvent[]>([]);

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");

    if (error) {
      console.error(error);

      return;
    }

    const now = new Date();
    const past: DBOGTEvent[] = [];
    const future: DBOGTEvent[] = [];

    for (const event of data) {
      if (new Date(event.schedule_at) < now) {
        past.push(event);
      } else {
        future.push(event);
      }
    }

    setPastEvents(past);
    setFutureEvents(future);
  }

  return (
    <RegularPageLayout>
      <h1 className="text-white text-5xl text-center">Eventos</h1>
      <FlagBar className="my-4 w-full md:w-2xs" />
      <div className="mt-12">
        <h2 className="mb-6 text-white text-4xl">Eventos Próximos</h2>
        <div className="space-y-4">
          {futureEvents.map((event) => (
            <OGTEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-6 text-white text-4xl">Eventos Pasados</h2>
        <div className="space-y-4">
          {pastEvents.map((event) => (
            <OGTEvent key={event.id} event={event} />
          ))}
        </div>
      </div>
    </RegularPageLayout>
  );
}
