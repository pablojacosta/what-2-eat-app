import { useIngredientsStore } from "../../../../store/useIngredientsStore";
import { useSuggestionsStore } from "../../../../store/useSuggestionsStore";
import SuggestionsList from "../../../SuggestionsList/SuggestionsList";
import styles from "./IngredientsInput.module.scss";
import suggestions from "../../../../ingredients.json";

const IngredientsInput = () => {
  const { newIngredient, setNewIngredient } = useIngredientsStore();
  const { showSuggestions, setFilteredSuggestions, setShowSuggestions } =
    useSuggestionsStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setNewIngredient(e.target.value);

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(unLinked);
    setShowSuggestions(true);
  };

  return (
    <div className={styles.ingredientsInput}>
      <input
        placeholder="Type ingredient"
        value={newIngredient ?? ""}
        onChange={handleInputChange}
      />
      {showSuggestions && newIngredient && <SuggestionsList />}
    </div>
  );
};

export default IngredientsInput;
