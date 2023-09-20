import { useState } from "react";
import { useIngredientsStore } from "@store/useIngredientsStore";
import axios from "axios";
import { api_key } from "@constants/env";
import { useRecipesStore } from "@store/useRecipesStore";

const useGetRecipesData = () => {
  const { ingredients, setIngredients } = useIngredientsStore();
  const [isLoading, setIsLoading] = useState(false);
  const { setRecipesToDisplay } = useRecipesStore();
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${[
    ...ingredients,
  ]}&ranking=1&number=4`;

  const getRecipesData = async () => {
    if (ingredients && ingredients.length > 0) {
      setIsLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setRecipesToDisplay(response.data);
        })
        .then(() => setIngredients([]))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return { getRecipesData, isLoading };
};

export default useGetRecipesData;
