import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RECIPES_STORE } from "@constants/env";
import { IRecipe } from "@components/Ingredients/components/RecipesList/RecipesList";

interface IRecipesStore {
  recipesToDisplay: IRecipe[] | [];
  setRecipesToDisplay: (recipesToDisplay: IRecipe[]) => void;
  clearStore: () => void;
}

const initialState = {
  recipesToDisplay: [],
};

export const useRecipesStore = create<IRecipesStore>()(
  persist(
    (set) => ({
      ...initialState,
      setRecipesToDisplay: (recipesToDisplay: IRecipe[]) =>
        set((state) => ({
          ...state,
          recipesToDisplay,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    { name: RECIPES_STORE }
  )
);
