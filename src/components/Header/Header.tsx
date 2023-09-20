import Container from "@elements/Container";
import styles from "./Header.module.scss";

const Header = () => (
  <Container>
    <div className={styles.header}>
      <h1>What's in your fridge/pantry?</h1>
      <h3>Add the ingredients you would like to cook with</h3>
    </div>
  </Container>
);

export default Header;
