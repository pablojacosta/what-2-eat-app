/* eslint-disable @typescript-eslint/no-explicit-any */
import IngredientsInput from "../IngredientsInput/IngredientsInput";
import AddIngredientButton from "../AddIngredientButton/AddIngredientButton";
import styles from "./IngredientForm.module.scss";

interface IIngredientForm {
  newIngredient: string;
  handleInputChange: (e: any) => void;
  addIngredient: (e: any) => void;
  onClickSuggestion: (e: any) => void;
  filteredSuggestions: any;
  activeSuggestionIndex: any;
  showSuggestions: any;
  onKeyDown: any;
}

const IngredientForm = ({
  newIngredient,
  handleInputChange,
  addIngredient,
  onClickSuggestion,
  filteredSuggestions,
  activeSuggestionIndex,
  showSuggestions,
  onKeyDown,
}: IIngredientForm) => {
  return (
    <form onSubmit={addIngredient} className={styles.ingredientForm}>
      <IngredientsInput
        newIngredient={newIngredient}
        handleInputChange={handleInputChange}
        filteredSuggestions={filteredSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        showSuggestions={showSuggestions}
        onKeyDown={onKeyDown}
        onClickSuggestion={onClickSuggestion}
      />
      <AddIngredientButton />
    </form>
  );
};

export default IngredientForm;
