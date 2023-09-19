import { useIngredientsStore } from "../../store/useIngredientsStore";
import Container from "../elements/Container";
import IconCloseOutline from "../elements/Icons/CloseIcon/CloseIcon";
import styles from "./AddedIngredients.module.scss";

const AddedIngredients = () => {
  const { ingredients, setIngredients } = useIngredientsStore();

  const onClickRemoveIngredient = (ingredientToRemove: string) => {
    if (ingredients) {
      const filteredIngredients = ingredients.filter(
        (ingredient: string) => ingredient !== ingredientToRemove
      );
      setIngredients(filteredIngredients);
    }
  };

  return (
    <Container>
      <div className={styles.addedIngredients}>
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
    </Container>
  );
};

export default AddedIngredients;
