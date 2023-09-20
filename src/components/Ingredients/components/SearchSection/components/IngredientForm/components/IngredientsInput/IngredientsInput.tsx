import styles from "./IngredientsInput.module.scss";
import suggestions from "@utils/ingredients.json";
import { useIngredientsStore } from "@store/useIngredientsStore";
import { useSuggestionsStore } from "@store/useSuggestionsStore";
import { useRecipesStore } from "@store/useRecipesStore";
import Message from "../Message";

const IngredientsInput = () => {
  const {
    newIngredient,
    setNewIngredient,
    ingredients,
    setShowMessage,
    showMessage,
    isAlreadySelected,
  } = useIngredientsStore();
  const { setFilteredSuggestions, setShowSuggestions } = useSuggestionsStore();
  const isMaxIngredients = ingredients.length === 9;
  const { recipesToDisplay, setRecipesToDisplay } = useRecipesStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (recipesToDisplay.length) {
      setShowMessage(false);
      setRecipesToDisplay([]);
      return;
    }

    if (!isMaxIngredients) {
      setShowMessage(false);
      const userInput = e.target.value;
      setNewIngredient(e.target.value);

      const unLinked = suggestions.filter(
        (suggestion) =>
          suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      setFilteredSuggestions(unLinked);
      setShowSuggestions(true);
      return;
    }

    setShowMessage(true);
  };

  return (
    <>
      <div className={styles.ingredientsInput}>
        <input
          placeholder="Type ingredient"
          value={newIngredient ?? ""}
          onChange={handleInputChange}
        />
        {showMessage && (
          <Message
            isMaxIngredients={isMaxIngredients}
            isAlreadySelected={isAlreadySelected}
          />
        )}
      </div>
    </>
  );
};

export default IngredientsInput;
