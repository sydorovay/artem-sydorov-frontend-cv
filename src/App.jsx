import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ExperienceSection from "./components/sections/ExperienceSection/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection/SkillsSection";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import ResumePage from "../src/pages/ResumePage/ResumePage"; 

import styles from "./styles/App.module.css";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Container>
        <div className={styles.app}>
          <Header />
          <main className={styles.mainContainer}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section className={styles.section}>
                      <SkillsSection />
                    </section>
                    <section className={styles.section}>
                      <ExperienceSection />
                    </section>
                  </>
                }
              />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Container>
    </Router>
  );
};

export default App;