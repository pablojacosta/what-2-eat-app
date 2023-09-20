import { useIngredientsStore } from "@store/useIngredientsStore";
import SuggestionsList from "./components/SuggestionsList";
import IngredientsInput from "./components/IngredientsInput/IngredientsInput";
import styles from "./IngredientForm.module.scss";
import { useSuggestionsStore } from "@store/useSuggestionsStore";

const IngredientForm = () => {
  const { newIngredient } = useIngredientsStore();
  const { showSuggestions } = useSuggestionsStore();

  return (
    <form className={styles.ingredientForm}>
      <IngredientsInput />
      {showSuggestions && newIngredient && <SuggestionsList />}
    </form>
  );
};

export default IngredientForm;
