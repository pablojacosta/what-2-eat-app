import { create } from "zustand";
import { persist } from "zustand/middleware";
import { INGREDIENTS_STORE } from "@constants/env";

interface IIngredientsStore {
  newIngredient: string | null;
  ingredients: string[];
  ingredientsForUrl: string[];
  setNewIngredient: (ingredient: string) => void;
  setIngredients: (ingredients: string[]) => void;
  setIngredientsForUrl: (array: string[]) => void;
  clearStore: () => void;
}

const initialState = {
  newIngredient: null,
  ingredients: [],
  ingredientsForUrl: [],
};

export const useIngredientsStore = create<IIngredientsStore>()(
  persist(
    (set) => ({
      ...initialState,
      setNewIngredient: (newIngredient: string) =>
        set((state) => ({
          ...state,
          newIngredient,
        })),
      setIngredients: (ingredients: string[]) =>
        set((state) => ({
          ...state,
          ingredients,
        })),
      setIngredientsForUrl: (ingredients: string[]) =>
        set((state) => ({
          ...state,
          ingredients,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    { name: INGREDIENTS_STORE }
  )
);
