import { useTextStore } from "../store/useTextStore";
import { countCharacters } from "../utils/analyze";

function TextInput() {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const limitOn = useTextStore((state) => state.limitOn);
  const limit = useTextStore((state) => state.limit);

  const characters = countCharacters(text, excludeSpaces);
  const limitNumber = Number(limit);
  const exceeded = limitOn && limitNumber > 0 && characters > limitNumber;

  return (
    <div className="mt-10">
      <label htmlFor="text" className="sr-only">
        Your text
      </label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here… (or paste your text)"
        className={`h-52 w-full resize-none rounded-xl border-2 bg-card p-4 text-lg text-main placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          exceeded ? "border-danger" : "border-line"
        }`}
      />

      {exceeded && (
        <p role="alert" className="mt-2 text-danger">
          Limit reached! Your text exceeds {limitNumber} characters.
        </p>
      )}
    </div>
  );
}

export default TextInput;