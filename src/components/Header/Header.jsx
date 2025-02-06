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
      <Container >
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
              <li><a href="/">Головна</a></li>
              <li><a href="/about">Про нас</a></li>
              <li><a href="/contact">Контакти</a></li>
            </ul>
          </nav>
        </div>
      </Container>
      </header>
  )
};


export default Header