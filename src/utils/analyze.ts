export function countCharacters(text: string, excludeSpaces: boolean) {
  if (excludeSpaces) {
    return text.replace(/\s/g, "").length;
  }
  return text.length;
}

export function countWords(text: string) {
  if (text.trim() === "") {
    return 0;
  }
  return text.trim().split(/\s+/).length;
}

export function countSentences(text: string) {
  return text.split(/[.!?]+/).filter((part) => part.trim() !== "").length;
}

export function getReadingTime(words: number) {
  const minutes = words / 200;

  if (words === 0) {
    return "0 minutes";
  }
  if (minutes < 1) {
    return "<1 minute";
  }
  const rounded = Math.round(minutes);
  return rounded === 1 ? "1 minute" : `${rounded} minutes`;
}

export type LetterCount = {
  letter: string;
  count: number;
  percent: number;
};

export function getLetterDensity(text: string): LetterCount[] {
  const counts: Record<string, number> = {};
  let total = 0;

  for (const char of text.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      counts[char] = (counts[char] || 0) + 1;
      total++;
    }
  }

  return Object.entries(counts)
    .map(([letter, count]) => ({
      letter,
      count,
      percent: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count);
}