import Container from '../Container/Container'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <Container >
    <footer className={styles.footer}>
      <p>@2025 My CV. All rights reserved.</p>
      <p>Conact me: sydorovay@gmail.com</p>
      </footer> 
    </Container>
  )
}

export default Footer