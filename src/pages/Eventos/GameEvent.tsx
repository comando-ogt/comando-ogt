import clsx from "clsx";
import { motion } from "motion/react";
import type { GameEvent } from "../../types/events";

interface Props {
  event: GameEvent;
}

export function GameEvent({ event }: Props) {
  return (
    <motion.div
      className={clsx(
        "bg-neutral-950",
        "p-4",
        "rounded-lg",
        "border-l-4",
        event.result === "Win"
          ? "border-ogt-green"
          : event.result === "None"
          ? "border-yellow-500"
          : "border-ogt-red"
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.25,
          },
        }),
      }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <p className="font-bold text-white text-lg">{event.title}</p>
          <p className="text-gray-300">vs. {event.opponent}</p>
        </div>
        {event.result !== "None" && (
          <span
            className={clsx(
              "mt-2",
              "sm:mt-0",
              "px-3",
              "py-1",
              "text-sm",
              "font-bold",
              "rounded-full",
              "self-start",
              "sm:self-center",
              event.result === "Win" ? "text-ogt-green" : "text-ogt-red"
            )}
          >
            {event.result} {event.score}-{5 - event.score}
          </span>
        )}
      </div>
      <div className="flex flex-wrap space-x-4 mt-2 text-gray-400 text-sm">
        <span>{event.date}</span>
        <span>|</span>
        <span>{event.type}</span>
        <span>|</span>
        <span>Map: {event.map}</span>
      </div>
    </motion.div>
  );
}
