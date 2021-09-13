import styles from './Header.module.scss';
import Button from '../../components]/Button/Button';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>List of articles</h1>
      <Button typeButton="primary" textButton="Add article" />
    </header >
  );
}

export default Header;
