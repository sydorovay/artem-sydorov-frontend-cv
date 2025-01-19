import Container from '../Container/Container'
import styles from './Header.module.css'

const Header = () => {
  return (
    <Container >
      <header className={styles.header} >
        <h1 className={styles.caption}>Artem Sydorov</h1>
        <p className={styles.paragraph}>Welcome to my profession resume </p>
      </header>
    </Container>
  )
}

export default Header