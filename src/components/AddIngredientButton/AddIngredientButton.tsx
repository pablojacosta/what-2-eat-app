import styles from "./AddIngredientButton.module.scss";

const AddIngredientButton = () => {
  return (
    <div className={styles.addIngredientButton}>
      <div>
        <button>Add ingredient</button>
      </div>
    </div>
  );
};

export default AddIngredientButton;
