import Container from '../../../Container/Container'
import styles from './Contacts.module.css'

const Contact = () => {
  return (
    <Container>
      <section className={styles.contacts}>
        <h2>Contacts</h2>
      <ul>
        <li> <a href="">GIT</a></li>
        <li><a href="">Linkedin </a></li>
        <li><a href="">Telegram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Gmail</a></li>
      </ul>
      </section>
    </Container>
  )
}

export default Contact