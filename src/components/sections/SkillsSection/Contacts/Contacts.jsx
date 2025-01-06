import styles from './Contacts.module.css'

const Contact = () => {
  return (
    <section className={styles.contacts}>
      <ul>
        <li> <a href="">GIT</a></li>
        <li><a href="">Linkedin </a></li>
        <li><a href="">Telegram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Gmail</a></li>
      </ul>
    </section>
  )
}

export default Contact