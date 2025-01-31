// import { useState } from 'react'
import Header from './components/Header/Header';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';

import styles from './styles/App.module.css';
import './styles/global.css';
import Container from './components/Container/Container';

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <Container>
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContainer}>
        <SkillsSection />
        <ExperienceSection />
      </main>
      <Footer />
      </div>
    </Container>
  )
}

export default App;
