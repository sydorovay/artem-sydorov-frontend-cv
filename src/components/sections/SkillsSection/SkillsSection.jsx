import Contacts from './Contacts/Contacts'
import Languages from './Languages/Languages'
import TechSkills from './TechSkills/TechSkills'
import SoftSkills from './SoftSkills/SoftSkills'

import styles from './SkillsSection.module.css'

const SkillsSection = () => {
  return (
    <section className={styles.SkillsSection}>
      <Contacts />
      <Languages />
      <TechSkills />
      <SoftSkills  />
    </section>
  )
}

export default SkillsSection