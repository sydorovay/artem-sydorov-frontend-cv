import styles from './Education.module.css'

const Education = () => {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Курси Fullstack Developer</h3>
          <p>[Назва школи/курсу] — [Місто, країна]
            [ММ/РРРР] – [ММ/РРРР]
            Основи HTML, CSS, JavaScript, React, TypeScript</p>
        </li>
      </ul>
    </section>
  )
}

export default Education;