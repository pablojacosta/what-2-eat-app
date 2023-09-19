import IngredientForm from "../IngredientForm";
import SearchButton from "../SearchButton";
import Container from "../elements/Container";
import styles from "./SearchSection.module.scss";

const SearchSection = () => (
  <Container>
    <div className={styles.searchSection}>
      <IngredientForm />
      <SearchButton />
    </div>
  </Container>
);

export default SearchSection;
