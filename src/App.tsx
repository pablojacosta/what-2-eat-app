import { useEffect } from "react";
import Header from "./components/Header/Header";
import suggestions from "./utils/ingredients.json";
import styles from "./App.module.scss";
import "../src/styles/globals.scss";
import Ingredients from "./components/Ingredients";
import { useIngredientsStore } from "./store/useIngredientsStore";

const App = () => {
  const { newIngredient, ingredients, setNewIngredient, setIngredients } =
    useIngredientsStore();
  const ingredientIsInSuggestions =
    newIngredient &&
    suggestions.map((ingredient) => ingredient.name).includes(newIngredient);
  const newIngredientIsNotAlreadyIncluded =
    newIngredient && !ingredients.includes(newIngredient);
  const isAbleToAddIngredient =
    ingredients &&
    ingredientIsInSuggestions &&
    newIngredientIsNotAlreadyIncluded;

  useEffect(() => {
    if (isAbleToAddIngredient) {
      setIngredients(ingredients.concat(newIngredient));
      setNewIngredient("");
    }
  }, [
    isAbleToAddIngredient,
    ingredients,
    newIngredient,
    setIngredients,
    setNewIngredient,
  ]);

  return (
    <div className={styles.app}>
      <Header />
      <Ingredients />
    </div>
  );
};

export default App;
