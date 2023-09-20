import { useRecipesStore } from "@store/useRecipesStore";
import Recipe from "./components/Recipe";
import styles from "./RecipesList.module.scss";

export interface IRecipe {
  id: number;
  image: string;
  title: string;
}

const RecipesList = () => {
  const { recipesToDisplay } = useRecipesStore();

  return (
    <div className={styles.recipesList}>
      {recipesToDisplay.map((recipe: IRecipe) => (
        <Recipe
          key={recipe.id}
          recipeId={recipe.id}
          recipeTitle={recipe.title}
          recipeImage={recipe.image}
        />
      ))}
    </div>
  );
};

export default RecipesList;
