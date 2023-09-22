/* eslint-disable @typescript-eslint/no-explicit-any */
import { useIngredientsStore } from "@store/useIngredientsStore";
import { ISuggestions, useSuggestionsStore } from "@store/useSuggestionsStore";
import styles from "./SuggestionsList.module.scss";
import Message from "../Message";

const SuggestionsList = () => {
  const { filteredSuggestions, setFilteredSuggestions, setShowSuggestions } =
    useSuggestionsStore();
  const {
    setNewIngredient,
    ingredients,
    setIsAlreadySelected,
    isAlreadySelected,
    showMessage,
    setShowMessage,
  } = useIngredientsStore();
  const isMaxIngredients = ingredients.length === 9;
  const checkIsSelected = (e: any) => {
    return ingredients.includes(e.target.innerText);
  };

  const onClickSuggestion = (e: any) => {
    if (!isMaxIngredients && !checkIsSelected(e)) {
      setIsAlreadySelected(false);
      setFilteredSuggestions([]);
      setNewIngredient(e.target.innerText);
      setShowSuggestions(false);
    }

    if (checkIsSelected(e)) {
      setIsAlreadySelected(true);
      setShowSuggestions(false);
      setShowMessage(true);
      setNewIngredient("");
    }
  };

  return (
    <div className={styles.suggestionsList}>
      {filteredSuggestions.length > 0 && !showMessage && (
        <ul>
          {filteredSuggestions.map((suggestion: ISuggestions) => (
            <li key={suggestion.id} onClick={onClickSuggestion}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      {showMessage && (
        <Message
          isMaxIngredients={isMaxIngredients}
          isAlreadySelected={isAlreadySelected}
        />
      )}
    </div>
  );
};

export default SuggestionsList;
