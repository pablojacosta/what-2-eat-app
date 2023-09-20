import Container from "../../../elements/Container";
import styles from "./SearchSection.module.scss";
import IngredientForm from "./components/IngredientForm";
import SearchButton from "./components/SearchButton";

const SearchSection = () => (
  <Container>
    <div className={styles.searchSection}>
      <IngredientForm />
      <SearchButton />
    </div>
  </Container>
);

export default SearchSection;
