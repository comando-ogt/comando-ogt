import { useEffect, useState } from "react";

interface Props {
  text: string;
  onAnimateComplete?: () => void;
}

export function TypewriterText({ text, onAnimateComplete }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }

    onAnimateComplete?.();
  }, [index, onAnimateComplete, text]);

  return (
    <span className="animate-pulse">
      {displayedText}
      <span className="inline-block bg-current ml-1 w-2 h-5 animate-blink" />
    </span>
  );
}
