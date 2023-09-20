import { useState } from "react";
import { useIngredientsStore } from "@store/useIngredientsStore";
import axios from "axios";
import { api_key } from "@constants/env";

const useGetRecipesData = () => {
  const { ingredients, setIngredients } = useIngredientsStore();
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${[
    ...ingredients,
  ]}&ranking=1&number=4`;

  const getRecipesData = () => {
    if (ingredients && ingredients.length > 0) {
      axios
        .get(url)
        .then((response) => {
          setDisplayedRecipes(response.data);
        })
        .then(() => setIngredients([]));
    }
  };

  return { getRecipesData, displayedRecipes };
};

export default useGetRecipesData;
