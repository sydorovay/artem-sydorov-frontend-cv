import Container from '../Container/Container'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <Container >
      <footer className={styles.footer}>
        <p className={styles.email}>Conact me: sydorovay@gmail.com</p>
        <p className={styles.license}>@2025 My CV. All rights reserved.</p>
      </footer> 
    </Container>
  )
}

export default Footer