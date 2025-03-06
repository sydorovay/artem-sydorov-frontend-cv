import Container from '../../../Container/Container'
import styles from './TechSkills.module.css'

const techSkills = ['React', 'JavaScript (ES6+)', 'CSS / SCSS', 'HTML', 'GIT & GitHub']

const TechSkills = () => {
  return (
    <Container>
      <section className={styles.techSkills}>
        <h2 className={styles.title}>Tech Skills</h2>
        <ul className={styles.list}> {
          techSkills.map((skill, index) => (
            <li key={index} className={styles.item}>{skill}</li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default TechSkills