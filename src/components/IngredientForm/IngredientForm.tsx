/* eslint-disable @typescript-eslint/no-explicit-any */
import IngredientsInput from "./components/IngredientsInput/IngredientsInput";
import styles from "./IngredientForm.module.scss";

const IngredientForm = () => (
  <form className={styles.ingredientForm}>
    <IngredientsInput />
  </form>
);

export default IngredientForm;
