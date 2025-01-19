import Education from './Education/Education'
import Experience from './Experience/Experience'
import Container from '../../Container/Container'

import styles from './ExperienceSection.module.css'

const ExperienceSection = () => {
  return (
    <Container className={styles.experienceContainer}>
      <section className={styles.experienceSection}>
        <Education />
        <Experience />
      </section>
    </Container>
  )
}

export default ExperienceSection