import Container from '../../../Container/Container';
import styles from './Education.module.css'

const Education = () => {
  return (
    <Container>
      <section className={styles.education}>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Курси - Fullstack Developer</h3>
            <p>[Goit] — [Ukraine]
              [09/2023] – [01/2025]
              Основи HTML, CSS, JavaScript, React, TypeScript, Node, </p>
          </li>
        </ul>
      </section>
    </Container>
  )
}

export default Education;