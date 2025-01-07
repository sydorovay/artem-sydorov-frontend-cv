import Container from '../../../Container/Container'
import styles from './Languages.module.css'

const Languages = () => {
  return (
    <Container>
    <section className={styles.languages}>
      <h2>Languages</h2>
      <ul>
        <li>Ukrainian: Native</li>
        <li>Russian: Proficient (C2, fluent in both written and spoken communication, including professional and academic contexts)</li>
        <li>Polish Proficient Intermediate (B1, capable of reading technical documentation and writing work emails).</li>
        <li>English: Intermediate (B1, capable of reading technical documentation and writing work emails).</li>
        <li>German: German: Basic (A2).</li>
      </ul>
      </section>
    </Container>
  )
}

export default Languages