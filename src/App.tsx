import { useEffect } from "react";
import Header from "./components/Header/Header";
import suggestions from "./ingredients.json";
import styles from "./App.module.scss";
import "../src/styles/globals.scss";
import Ingredients from "./components/Ingredients";
import { useIngredientsStore } from "./store/useIngredientsStore";

const App = () => {
  const { newIngredient, ingredients, setNewIngredient, setIngredients } =
    useIngredientsStore();

  useEffect(() => {
    if (
      ingredients &&
      newIngredient &&
      suggestions
        .map((ingredient) => ingredient.name)
        .includes(newIngredient) &&
      !ingredients.includes(newIngredient)
    ) {
      setIngredients(ingredients.concat(newIngredient));
      setNewIngredient("");
    }
  }, [ingredients, newIngredient, setIngredients, setNewIngredient]);

  return (
    <div className={styles.app}>
      <Header />
      <Ingredients />
    </div>
  );
};

export default App;
