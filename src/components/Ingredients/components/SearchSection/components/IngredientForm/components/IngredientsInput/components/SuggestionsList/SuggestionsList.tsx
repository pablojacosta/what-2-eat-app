/* eslint-disable @typescript-eslint/no-explicit-any */
import { useIngredientsStore } from "@store/useIngredientsStore";
import { useSuggestionsStore } from "@store/useSuggestionsStore";
import styles from "./SuggestionsList.module.scss";

const SuggestionsList = () => {
  const { filteredSuggestions, setFilteredSuggestions, setShowSuggestions } =
    useSuggestionsStore();
  const { setNewIngredient, ingredients } = useIngredientsStore();
  const isMaxIngredients = ingredients.length === 9;

  const onClickSuggestion = (e: any) => {
    if (!isMaxIngredients) {
      setFilteredSuggestions([]);
      setNewIngredient(e.target.innerText);
      setShowSuggestions(false);
    }
    setShowSuggestions(false);
  };

  return (
    <div className={styles.suggestionsList}>
      {filteredSuggestions.length ? (
        <ul>
          {filteredSuggestions.map((suggestion: any) => (
            <li key={suggestion.id} onClick={onClickSuggestion}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      ) : isMaxIngredients ? (
        <div>
          <p>Sorry, nine ingredients max...</p>
        </div>
      ) : (
        <div>
          <p>Sorry, no suggestions... Please type again.</p>
        </div>
      )}
    </div>
  );
};

export default SuggestionsList;
