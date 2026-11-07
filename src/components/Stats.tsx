import StatCard from "./StatCard";
import { useTextStore } from "../store/useTextStore";
import {
  countCharacters,
  countWords,
  countSentences,
} from "../utils/analyze";

function Stats() {
  const text = useTextStore((state) => state.text);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <StatCard
        label="Total Characters"
        value={countCharacters(text, excludeSpaces)}
        color="bg-violet-300"
      />
      <StatCard label="Word Count" value={countWords(text)} color="bg-orange-300" />
      <StatCard
        label="Sentence Count"
        value={countSentences(text)}
        color="bg-pink-300"
      />
    </div>
  );
}

export default Stats;