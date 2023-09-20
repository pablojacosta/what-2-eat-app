import useGetRecipesData from "../../../../../../hooks/useGetRecipesData";
import styles from "./SearchButton.module.scss";

const SearchButton = () => {
  const { getRecipesData } = useGetRecipesData();

  return (
    <div className={styles.searchButton}>
      <button onClick={getRecipesData}>Search recipes!</button>
    </div>
  );
};

export default SearchButton;
