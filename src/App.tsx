/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import RecipesList from "./components/RecipesList/RecipesList";
import IngredientForm from "./components/IngredientForm/IngredientForm";
import SearchButton from "./components/SearchButton/SearchButton";
import IngredientsList from "./ingredients.json";
import AddedIngredients from "./components/AddedIngredients/AddedIngredients";

const App = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const suggestions = IngredientsList;

  const [newIngredient, setNewIngredient] = useState<any>("");
  const [ingredients, setIngredients] = useState<any>([]);
  const [ingredientsForUrl, setIngredientsForUrl] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: any) => {
    const userInput = e.target.value;
    setNewIngredient(e.target.value);

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClickSuggestion = (e: any) => {
    setFilteredSuggestions([]);
    setNewIngredient(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const addIngredient = (e: any) => {
    if (
      newIngredient &&
      suggestions
        .map((ingredient) => ingredient.name)
        .includes(newIngredient) &&
      !ingredients.includes(newIngredient)
    ) {
      e.preventDefault();
      setIngredients(ingredients.concat(newIngredient));
      setNewIngredient("");
    }
    e.preventDefault();
  };

  const onKeyDown = (e: any) => {
    // enter key
    if (e.keyCode === 13) {
      setNewIngredient(filteredSuggestions[activeSuggestionIndex].name);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
    // up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const onClickRemoveIngredient = (ingredientToRemove: any) => {
    const filteredIngredients = ingredients.filter(
      (ingredient: any) => ingredient !== ingredientToRemove
    );
    setIngredients(filteredIngredients);
  };

  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${[
    ...ingredientsForUrl,
  ]}&ranking=1&number=4`;
  // const bgImageUrl =
  //   "https://c.pxhere.com/images/4a/6d/bf88418ce81d22c8115e0d5dd64d-1641585.jpg!d";

  const getRecipesData = () => {
    setIngredientsForUrl([]);
    setIngredientsForUrl(ingredientsForUrl.concat(ingredients));
    setIngredients([]);
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setDisplayedRecipes(response.data);
      console.log("response.data", response.data);
    });
  }, [ingredientsForUrl, url]);

  return (
    <div>
      <Header />
      <div>
        <AddedIngredients
          ingredients={ingredients}
          onClickRemoveIngredient={onClickRemoveIngredient}
        />
        <IngredientForm
          newIngredient={newIngredient}
          handleInputChange={handleInputChange}
          addIngredient={addIngredient}
          onClickSuggestion={onClickSuggestion}
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          showSuggestions={showSuggestions}
          onKeyDown={onKeyDown}
        />
        <SearchButton getRecipesData={getRecipesData} />
        <RecipesList
          recipes={displayedRecipes}
          ingredientsForUrl={ingredientsForUrl}
        />
      </div>
    </div>
  );
};

export default App;
