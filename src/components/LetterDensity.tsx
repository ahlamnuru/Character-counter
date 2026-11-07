import { useState } from "react";
import { useTextStore } from "../store/useTextStore";
import { getLetterDensity } from "../utils/analyze";

function LetterDensity() {
  const text = useTextStore((state) => state.text);
  const [showAll, setShowAll] = useState(false);

  const letters = getLetterDensity(text);

  // show the top 5 letters, or all of them after clicking the button
  const shownLetters = showAll ? letters : letters.slice(0, 5);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Letter Density</h2>

      {letters.length === 0 ? (
        <p className="mt-4 text-muted">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {shownLetters.map((item) => (
            <div key={item.letter} className="flex items-center gap-4">
              <span className="w-6 font-medium uppercase">{item.letter}</span>

              <div className="h-3 flex-1 rounded-full bg-line">
                <div
                  className="h-3 rounded-full bg-orange-400"
                  style={{ width: `${item.percent}%` }}
                />
              </div>

              <span className="w-28 text-right text-muted">
                {item.count} ({item.percent.toFixed(2)}%)
              </span>
            </div>
          ))}
        </div>
      )}

      {letters.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-5 font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {showAll ? "See less" : "See more"}
        </button>
      )}
    </section>
  );
}

export default LetterDensity;