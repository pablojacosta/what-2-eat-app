import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SUGGESTIONS_STORE } from "../constants/env";

interface ISuggestions {
  name: string;
  id: number;
}

interface ISuggestionsStore {
  filteredSuggestions: ISuggestions[];
  showSuggestions: boolean;
  setFilteredSuggestions: (suggestions: ISuggestions[]) => void;
  setShowSuggestions: (showSuggestions: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  filteredSuggestions: [],
  showSuggestions: false,
};

export const useSuggestionsStore = create<ISuggestionsStore>()(
  persist(
    (set) => ({
      ...initialState,
      setFilteredSuggestions: (filteredSuggestions: ISuggestions[]) =>
        set((state) => ({
          ...state,
          filteredSuggestions,
        })),
      setShowSuggestions: (showSuggestions: boolean) =>
        set((state) => ({
          ...state,
          showSuggestions,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    { name: SUGGESTIONS_STORE }
  )
);
