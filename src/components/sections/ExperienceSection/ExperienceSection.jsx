import Education from './Education/Education'
import Experience from './Experience/Experience'

import styles from './ExperienceSection.module.css'

const ExperienceSection = () => {
  return (
    <section className={styles.experienceSection}>
      <Education />
      <Experience />
    </section>
  )
}

export default ExperienceSection