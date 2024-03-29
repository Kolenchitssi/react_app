import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>List of articles</h1>
    </header>
  );
}

export default Header;
