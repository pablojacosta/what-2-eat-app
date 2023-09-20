import styles from "./Message.module.scss";

interface IMessage {
  isMaxIngredients: boolean;
  isAlreadySelected: boolean;
}

const Message = ({ isMaxIngredients, isAlreadySelected }: IMessage) => {
  return (
    <div className={styles.message}>
      {isMaxIngredients ? (
        <p>Sorry, nine ingredients max...</p>
      ) : isAlreadySelected ? (
        <p>Sorry, ingredient already selected...</p>
      ) : (
        <p>Sorry, no suggestions... Please type again.</p>
      )}
    </div>
  );
};

export default Message;
