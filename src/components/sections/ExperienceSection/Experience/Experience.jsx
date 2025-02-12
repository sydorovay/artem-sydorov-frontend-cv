import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>Frontend Developer at Company</h3>
          <p>Jan 2020 - Present</p>
          <p>Developed responsive web application using React and Redux.</p>
        </li>
        <li>
          <h3>Web Developer at Company</h3>
          <p>Jan 2018 - Dec 2019</p>
          <p>Created dynamic websites and optimized perfomance.</p>
        </li>
      </ul>
    </section>
  )
}

export default Experience;