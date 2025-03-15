import Header from './components/Header/Header';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';

import styles from './styles/App.module.css';
import './styles/global.css';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <div className={styles.app}>
        <Header />
        <main className={styles.mainContainer}>
          <section className={styles.section}>
            <SkillsSection />
          </section>
          <section className={styles.section}>
            <ExperienceSection />
          </section>
        </main>
        <Footer />
      </div>
    </Container>
  );
};

export default App;