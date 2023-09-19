import AddedIngredients from "../AddedIngredients";
import RecipesList from "../RecipesList";
import SearchSection from "../SearchSection";
import styles from "./Ingredients.module.scss";

const Ingredients = () => (
  <div className={styles.ingredients}>
    <AddedIngredients />
    <SearchSection />
    <RecipesList />
  </div>
);

export default Ingredients;
