import { useState } from 'react'
import Container from '../Container/Container'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);

}

  return (
    
    <header className={styles.header}>
      <Container  className={styles.headerContainer}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Artem Sydorov</h1>
          <p className={styles.paragraph}>Welcome to my profession resume</p>
          <button className={styles.burger} onClick={toggleMenu}>
            <span className={menuOpen ? styles.lineOpen : styles.line}></span>
            <span className={menuOpen ? styles.lineOpen : styles.line}></span>
            <span className={menuOpen ? styles.lineOpen : styles.line}></span>
          </button>

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About me</a></li>
              <li><a href="/contact">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </Container>
      </header>
  )
};


export default Header