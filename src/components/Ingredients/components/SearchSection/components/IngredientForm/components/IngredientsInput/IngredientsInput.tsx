import styles from "./IngredientsInput.module.scss";
import suggestions from "@utils/ingredients.json";
import SuggestionsList from "./components/SuggestionsList";
import { useIngredientsStore } from "@store/useIngredientsStore";
import { useSuggestionsStore } from "@store/useSuggestionsStore";
import { useRecipesStore } from "@store/useRecipesStore";

const IngredientsInput = () => {
  const { newIngredient, setNewIngredient, ingredients } =
    useIngredientsStore();
  const { showSuggestions, setFilteredSuggestions, setShowSuggestions } =
    useSuggestionsStore();
  const isMaxIngredients = ingredients.length === 9;
  const { recipesToDisplay, setRecipesToDisplay } = useRecipesStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (recipesToDisplay.length) {
      setRecipesToDisplay([]);
    }

    if (!isMaxIngredients) {
      const userInput = e.target.value;
      setNewIngredient(e.target.value);

      const unLinked = suggestions.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      setFilteredSuggestions(unLinked);
      setShowSuggestions(true);
    }
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
      {showSuggestions && isMaxIngredients && <SuggestionsList />}
    </div>
  );
};

export default IngredientsInput;
