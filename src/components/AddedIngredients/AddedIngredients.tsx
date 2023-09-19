/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./AddedIngredients.module.scss";

interface IAddedIngredients {
  ingredients: any;
  onClickRemoveIngredient: (ingredient: any) => void;
}

const AddedIngredients = ({
  ingredients,
  onClickRemoveIngredient,
}: IAddedIngredients) => {
  return (
    <div className={styles.addedIngredients}>
      {ingredients.map((ingredient: any) => (
        <div key={ingredient}>
          <div onClick={() => onClickRemoveIngredient(ingredient)} />
          {ingredient}
        </div>
      ))}
    </div>
  );
};

export default AddedIngredients;
