import Container from '../../../Container/Container'
import styles from './SoftSkills.module.css'

const SoftSkills = () => {
  return (
    <Container>
      <section className={styles.softSkills}>
        <h2>Soft Skills</h2>
        <ul className={styles.softSkillsList}>
          <li>Scrum</li>
          <li>Agile</li>
          <li>GTD</li>
          <li>Teamwork</li>
        </ul>
      </section>
    </Container>
  )
}

export default SoftSkills