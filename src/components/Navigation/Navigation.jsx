import styles from './Navigation.module.css';

const Navigation = ({ menuOpen }) => {
  return (
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
      <ul>
        <li className={styles.link}><a href="/">Home</a></li>
        <li className={styles.link}><a href="/about">About me</a></li>
        <li className={styles.link}><a href="/contact">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;