/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./SearchButton.module.scss";

interface ISearchButton {
  getRecipesData: any;
}

const SearchButton = ({ getRecipesData }: ISearchButton) => {
  return (
    <div className={styles.searchButton}>
      <button onClick={getRecipesData}>Search recipes!</button>
    </div>
  );
};

export default SearchButton;
