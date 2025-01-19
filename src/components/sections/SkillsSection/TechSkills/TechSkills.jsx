import Container from '../../../Container/Container'
import styles from './TechSkills.module.css'

const TechSkills = () => {
  return (
    <Container>
      <section className={styles.techSkills}>
        <h2>Tech Skills</h2>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS / SCSS</li>
          <li>GIT & GitHub</li>
        </ul>
      </section>
    </Container>
  )
}

export default TechSkills