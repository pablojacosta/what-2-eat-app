import { useIngredientsStore } from "@store/useIngredientsStore";
import IconCloseOutline from "@elements/Icons/CloseIcon/CloseIcon";
import styles from "./AddedIngredients.module.scss";

const AddedIngredients = () => {
  const { ingredients, setIngredients, setShowMessage } = useIngredientsStore();

  const onClickRemoveIngredient = (ingredientToRemove: string) => {
    if (ingredients) {
      const filteredIngredients = ingredients.filter(
        (ingredient: string) => ingredient !== ingredientToRemove
      );
      setIngredients(filteredIngredients);
      setShowMessage(false);
    }
  };

  return (
    <div className={styles.addedIngredients}>
      <p className={styles.backText}>INGREDIENTS</p>
      <ul>
        {ingredients.map((ingredient: string) => (
          <li key={ingredient}>
            <p>{ingredient}</p>
            <button onClick={() => onClickRemoveIngredient(ingredient)}>
              <IconCloseOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedIngredients;
