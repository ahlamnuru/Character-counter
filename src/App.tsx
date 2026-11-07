import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import Options from "./components/Options";
import Stats from "./components/Stats";
import LetterDensity from "./components/LetterDensity";

function App() {
  return (
    <div className="min-h-screen bg-page text-main">
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
        <header className="flex items-center justify-between">
          <p className="text-xl font-bold">Character Counter</p>
          <ThemeToggle />
        </header>

        <h1 className="mx-auto mt-12 max-w-xl text-center text-4xl font-bold md:text-5xl">
          Analyze your text in real-time.
        </h1>

        <TextInput />
        <Options />
        <Stats />
        <LetterDensity />
      </div>
    </div>
  );
}

export default App;