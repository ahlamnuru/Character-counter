import { useTextStore } from "../store/useTextStore";
import { countWords, getReadingTime } from "../utils/analyze";

function Options() {
  const text = useTextStore((state) => state.text);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const setExcludeSpaces = useTextStore((state) => state.setExcludeSpaces);
  const limitOn = useTextStore((state) => state.limitOn);
  const setLimitOn = useTextStore((state) => state.setLimitOn);
  const limit = useTextStore((state) => state.limit);
  const setLimit = useTextStore((state) => state.setLimit);

  const readingTime = getReadingTime(countWords(text));

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={(e) => setExcludeSpaces(e.target.checked)}
          className="h-4 w-4 accent-violet-500"
        />
        Exclude Spaces
      </label>

      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={limitOn}
            onChange={(e) => setLimitOn(e.target.checked)}
            className="h-4 w-4 accent-violet-500"
          />
          Set Character Limit
        </label>

        {limitOn && (
          <input
            type="number"
            min="1"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            aria-label="Character limit"
            className="h-9 w-24 rounded-lg border border-edge bg-card px-3 text-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        )}
      </div>

      <p className="text-muted md:ml-auto">
        Approx. reading time: {readingTime}
      </p>
    </div>
  );
}

export default Options;