import AddedIngredients from "./components/AddedIngredients";
import styles from "./Ingredients.module.scss";
import SearchSection from "./components/SearchSection";
import RecipesList from "./components/RecipesList";
import Container from "@components/elements/Container";

const Ingredients = () => (
  <Container>
    <div className={styles.ingredients}>
      <AddedIngredients />
      <SearchSection />
      <RecipesList />
    </div>
  </Container>
);

export default Ingredients;
