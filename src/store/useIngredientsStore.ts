import { create } from "zustand";
import { persist } from "zustand/middleware";
import { INGREDIENTS_STORE } from "@constants/env";

interface IIngredientsStore {
  newIngredient: string | null;
  ingredients: string[];
  showMessage: boolean;
  isAlreadySelected: boolean;
  setNewIngredient: (ingredient: string) => void;
  setIngredients: (ingredients: string[]) => void;
  setShowMessage: (showMeesage: boolean) => void;
  setIsAlreadySelected: (isAlreadySelected: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  newIngredient: null,
  ingredients: [],
  showMessage: false,
  isAlreadySelected: false,
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
      setShowMessage: (showMessage: boolean) =>
        set((state) => ({
          ...state,
          showMessage,
        })),
      setIsAlreadySelected: (isAlreadySelected: boolean) =>
        set((state) => ({
          ...state,
          isAlreadySelected,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    { name: INGREDIENTS_STORE }
  )
);
