import { useState } from "react";
import { useIngredientsStore } from "@store/useIngredientsStore";
import axios from "axios";
import { api_key } from "@constants/env";

const useGetRecipesData = () => {
  const {
    ingredients,
    ingredientsForUrl,
    setIngredientsForUrl,
    setIngredients,
  } = useIngredientsStore();
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${[
    ...ingredientsForUrl!,
  ]}&ranking=1&number=4`;

  const getRecipesData = () => {
    if (ingredients && ingredients.length > 0 && ingredientsForUrl) {
      setIngredientsForUrl([]);
      setIngredientsForUrl(ingredientsForUrl.concat(ingredients));
      if (ingredientsForUrl.length > 0) {
        axios
          .get(url)
          .then((response) => {
            setDisplayedRecipes(response.data);
          })
          .then(() => setIngredients([]));
      }
    }
  };

  return { getRecipesData, displayedRecipes };
};

export default useGetRecipesData;
