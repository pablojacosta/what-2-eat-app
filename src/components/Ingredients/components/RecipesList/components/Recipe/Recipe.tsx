import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Recipe.module.scss";
import { api_key } from "@constants/env";

interface IRecipe {
  recipeId: number;
  recipeTitle: string;
  recipeImage: string;
}

const Recipe = ({ recipeId, recipeTitle, recipeImage }: IRecipe) => {
  const [recipeUrl, setRecipeUrl] = useState("");
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${api_key}`;

  useEffect(() => {
    axios.get(url).then((response) => setRecipeUrl(response.data.sourceUrl));
  }, [recipeId, url]);

  return (
    <div className={styles.recipe}>
      <picture>
        <img src={recipeImage} alt="recipe" />
      </picture>
      <h5 className={styles.title}>{recipeTitle}</h5>
      <button>
        <a href={recipeUrl} target="_blank" rel="noopener noreferrer">
          Go to Recipe
        </a>
      </button>
    </div>
  );
};

export default Recipe;
