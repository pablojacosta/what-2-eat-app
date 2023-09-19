/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./SuggestionsList.module.scss";

interface ISuggestionsList {
  onClickSuggestion: (e: any) => void;
  filteredSuggestions: any;
  activeSuggestionIndex: any;
  showSuggestions: any;
}

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestionIndex,
  onClickSuggestion,
}: ISuggestionsList) => {
  return filteredSuggestions.length ? (
    <ul className={styles.suggestionsList}>
      {filteredSuggestions.map((suggestion: any, index: number) => {
        if (index === activeSuggestionIndex) {
          return <li key={suggestion.id}>{suggestion.name}</li>;
        }

        return (
          <li key={suggestion.id} onClick={onClickSuggestion}>
            {suggestion.name}
          </li>
        );
      })}
    </ul>
  ) : (
    <div>
      <div>
        <div>Sorry, no suggestions... Please type again.</div>
      </div>
    </div>
  );
};

export default SuggestionsList;
