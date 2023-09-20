/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetRecipesData from "@hooks/useGetRecipesData";
import { useIngredientsStore } from "@store/useIngredientsStore";
import Recipe from "./components/Recipe";
import Container from "@elements/Container";
import styles from "./RecipesList.module.scss";

const RecipesList = () => {
  const { ingredientsForUrl } = useIngredientsStore();
  const { displayedRecipes } = useGetRecipesData();

  if (ingredientsForUrl.length > 0) {
    return (
      <Container>
        <div className={styles.recipesList}>
          {displayedRecipes.map((recipe: any) => (
            <Recipe
              key={recipe.id}
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              recipeImage={recipe.image}
            />
          ))}
        </div>
      </Container>
    );
  }
  return null;
};

export default RecipesList;
