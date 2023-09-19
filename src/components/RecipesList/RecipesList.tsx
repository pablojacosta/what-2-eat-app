/* eslint-disable @typescript-eslint/no-explicit-any */
import Recipe from "../Recipe/Recipe";
import styles from "./RecipesList.module.scss";

interface IRecipeList {
  recipes: any;
  ingredientsForUrl: any;
}

const RecipesList = ({ recipes, ingredientsForUrl }: IRecipeList) => {
  if (ingredientsForUrl.length > 0) {
    return (
      <div className={styles.recipesList}>
        {recipes.map((recipe: any) => (
          <Recipe
            key={recipe.id}
            recipeId={recipe.id}
            recipeTitle={recipe.title}
            recipeImage={recipe.image}
          />
        ))}
      </div>
    );
  }
  return null;
};

export default RecipesList;
