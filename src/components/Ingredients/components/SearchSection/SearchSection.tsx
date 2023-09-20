import styles from "./SearchSection.module.scss";
import IngredientForm from "./components/IngredientForm";
import SearchButton from "./components/SearchButton";

const SearchSection = () => (
  <div className={styles.searchSection}>
    <IngredientForm />
    <SearchButton />
  </div>
);

export default SearchSection;
