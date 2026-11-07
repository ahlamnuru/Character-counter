import { create } from "zustand";

type TextState = {
  text : string;
  excludeSpaces: boolean;
  limitOn: boolean;
  limit: string;
  setText: (text: string) => void;
  setExcludeSpaces: (value: boolean) => void;
  setLimitOn: (value: boolean) => void;
  setLimit: (value: string) => void;
}

export const useTextStore = create<TextState>() ((set) =>({
  text: '',
  excludeSpaces: false,
  limitOn: false,
  limit: '',
  setText: (text) => set({ text }),
  setExcludeSpaces: (excludeSpaces) => set({ excludeSpaces }),
  setLimitOn: (limitOn) => set({ limitOn }),
  setLimit: (limit) => set({ limit }),
}));