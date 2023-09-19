import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div>What's in your fridge/pantry?</div>
      </div>

      <div>Add the ingredients you would like to cook with</div>
    </div>
  );
};

export default Header;
