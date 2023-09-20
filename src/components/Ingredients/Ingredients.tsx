import AddedIngredients from "./components/AddedIngredients";
import styles from "./Ingredients.module.scss";
import SearchSection from "./components/SearchSection";
import RecipesList from "./components/RecipesList";

const Ingredients = () => (
  <div className={styles.ingredients}>
    <AddedIngredients />
    <SearchSection />
    <RecipesList />
  </div>
);

export default Ingredients;
