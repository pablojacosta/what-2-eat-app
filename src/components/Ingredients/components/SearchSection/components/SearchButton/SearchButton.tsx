import useGetRecipesData from "@hooks/useGetRecipesData";

const SearchButton = () => {
  const { getRecipesData } = useGetRecipesData();

  return (
    <div>
      <button onClick={getRecipesData}>Search recipes!</button>
    </div>
  );
};

export default SearchButton;
