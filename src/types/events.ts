export interface GameEvent {
  id: number;
  date: string;
  title: string;
  opponent: string;
  type: string;
  map: string;
  result: "Win" | "Loss" | "None";
  score: number;
}
