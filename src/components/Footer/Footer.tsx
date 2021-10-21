import styles from "./Footer.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p className="textFooter">
        The site was created on React in 2021
      </p>
    </footer>
  );
}

export default Footer
