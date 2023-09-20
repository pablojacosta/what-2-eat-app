/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Recipe.module.scss";

interface IRecipe {
  recipeId: any;
  recipeTitle: string;
  recipeImage: any;
}

const Recipe = ({ recipeId, recipeTitle, recipeImage }: IRecipe) => {
  const [recipeUrl, setRecipeUrl] = useState("");
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=3e8f01e5d1934f8ba4962282bad7701f`;

  useEffect(() => {
    axios.get(url).then((response) => setRecipeUrl(response.data.sourceUrl));
    console.log("Data Fulfilled");
  }, [recipeId, url]);

  return (
    <div className={styles.recipe}>
      <div>
        <div>
          <picture>
            <img src={recipeImage} alt="recipe" />
          </picture>
        </div>
        <div>
          <div>{recipeTitle}</div>
          <div>
            <div>
              <a href={recipeUrl}>Go to Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
