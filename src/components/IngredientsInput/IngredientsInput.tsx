/* eslint-disable @typescript-eslint/no-explicit-any */
import SuggestionsList from "../SuggestionsList/SuggestionsList";
import styles from "./IngredientsInput.module.scss";

interface IIngredientsInput {
  newIngredient: string;
  handleInputChange: (e: any) => void;
  onClickSuggestion: (e: any) => void;
  filteredSuggestions: any;
  activeSuggestionIndex: any;
  showSuggestions: any;
  onKeyDown: any;
}

const IngredientsInput = ({
  newIngredient,
  handleInputChange,
  filteredSuggestions,
  activeSuggestionIndex,
  showSuggestions,
  onClickSuggestion,
  onKeyDown,
}: IIngredientsInput) => {
  return (
    <div className={styles.ingredientsInput}>
      <input
        placeholder="Type ingredient"
        value={newIngredient}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      {showSuggestions && newIngredient && (
        <SuggestionsList
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          showSuggestions={showSuggestions}
          onClickSuggestion={onClickSuggestion}
        />
      )}
    </div>
  );
};

export default IngredientsInput;
