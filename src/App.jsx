// import { useState } from 'react'
import Header from './components/Header/Header';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';

import styles from './styles/App.module.css';

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;
