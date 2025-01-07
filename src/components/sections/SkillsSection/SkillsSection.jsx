import Contacts from './Contacts/Contacts'
import Languages from './Languages/Languages'
import TechSkills from './TechSkills/TechSkills'
import SoftSkills from './SoftSkills/SoftSkills'
import Container from '../../Container/Container'

import styles from './SkillsSection.module.css'


const SkillsSection = () => {
  return (
    <Container>
      <section className={styles.skillsSection}>
        <Contacts />
        <Languages />
        <TechSkills />
        <SoftSkills />
      </section>
    </Container>
  )
}

export default SkillsSection