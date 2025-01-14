import { useState } from 'react';
import Container from '../../../Container/Container'
import styles from './Contacts.module.css'


const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <section className={styles.contacts}>
        <h2>Contacts</h2>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown}
            className={`${styles.dropdownButton} ${styles.mobileOnly}`}>
            More
          </button>
          <ul className={`${styles.dropdownMenu} ${isOpen ? styles.show : ''}`}>
            <li>
              <a href="https://github.com">
                <i className="fab fa-github"></i> GIT
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://t.me">
                <i className="fab fa-telegram"></i> Telegram
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="mailto:example@gmail.com">
                <i className="fas fa-envelope"></i> Gmail
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Contact;