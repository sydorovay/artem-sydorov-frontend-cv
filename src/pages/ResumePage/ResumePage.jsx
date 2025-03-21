import { useRef } from "react";
import Button from "/src/components/ui/Button";
import Card from "/src/components/ui/Card";
import { Download } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import style from "./ResumePage.module.css"

const ResumePage = () => {
  const resumeRef = useRef();

  const handleDownloadPDF = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Resume_Artem_Sidorov",
    removeAfterPrint: true,
  });

  return (
    <div className="containerCv">
      <Card ref={resumeRef}>
        {<div className="">
          <h1 className="">Artem Sydorov</h1>
          <p className=""></p>
          <hr className="" />

          <section>
            <h2 className="text-xl font-semibold">Contacts</h2>
            <p>Email: artem.sydorov@gmail.com</p>
            <a href="tel:+491727616858">Телефон: +49 172 761 6858</a>
            <a href="https://www.linkedin.com/in/artem-sydorov/">LinkedIn: Artem-sydorov/</a>
          </section>

          <section>
            <h2 className="">Skills</h2>
            <ul className={style.SkillsList}>
              <li>React, Redux, React Router</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>HTML5, CSS3, SCSS, Tailwind CSS</li>
              <li>Responsive Web Design (Mobile-first approach)</li>
              <li>RESTful APIs, GraphQL</li>
              <li>Version control with Git and GitHub</li>
              <li>Cross-browser compatibility and debugging</li>
              <li>Web performance optimization</li>
              <li>Frontend build tools: Webpack, Babel, Vite</li>
              <li>Understanding of accessibility best practices (WCAG)</li>
              <li>Familiarity with design systems and component libraries (e.g., Material UI, Ant Design)</li>
            </ul>
          </section>

          <section>
            <h2 className="">Work Experiesne</h2>
            <p>
              <strong>Frontend Developer</strong> –
            </p>
            <ul className="list-disc pl-6">
              <ul className={style.Work}>
                
              </ul>
            </ul>
          </section>

          <section>
            <h2 className="">Education</h2>
            <p>Course: Frontend Developer, GoIT scholl  (2023-2025)</p>
          </section>
        </div>}
      </Card>

      <Button onClick={handleDownloadPDF} className="mt-6 flex gap-2">
        <Download size={18} /> Завантажити PDF
      </Button>
    </div>
  );
};

export default ResumePage;