import styles from './Education.module.css'

const Education = () => {
  return (
      <section className={styles.education}>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Курси - Fullstack Developer</h3>
            <p>Goit — Ukraine [09/2023] – [01/2025]
            </p>
              <p>Основи HTML, CSS, JavaScript, React, TypeScript, Node js. </p>
          </li>
        </ul>
      </section>
  )
}

export default Education;