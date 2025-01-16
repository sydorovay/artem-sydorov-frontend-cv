import Container from '../../../Container/Container'
import styles from './Languages.module.css'

const Languages = () => {
  return (
    <Container>
    <section className={styles.languages}>
      <h2>Languages</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.language}>Ukrainian</span>: <span className={styles.level}>Native</span>
          </li>
          <li className={styles.item}>
            <span className={styles.language}>Russian</span>: <span className={styles.level}>Proficient (C2)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.language}>Polish</span>: <span className={styles.level}>Intermediate (B1)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.language}>English</span>: <span className={styles.level}>Intermediate (B1)</span>
          </li>
          <li className={styles.item}>
            <span className={styles.language}>German</span>: <span className={styles.level}>Basic (A2)</span>
          </li>
        </ul>
      </section>
    </Container>
  )
}

export default Languages

