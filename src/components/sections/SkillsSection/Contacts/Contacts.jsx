import { useState } from 'react';
import Container from '../../../Container/Container';
import styles from './Contacts.module.css';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaEnvelope, FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const contactLinks = [
  {
    id: 2, href: 'https://www.linkedin.com/in/artem-sydorov/', icon: <FaLinkedin />, label: 'LinkedIn'
  },
  { id: 3, href: 'https://www.telegram.org/Sydorovay', icon: <FaTelegram />, label: 'Telegram' },
  { id: 4, href: 'https://www.facebook.com/SydorovAY', icon: <FaFacebook />, label: 'Facebook' },
  { id: 5, href: 'https://www.instagram.com/sydorovay/', icon: <FaInstagram />, label: 'Instagram' },
  { id: 6, href: 'https://wa.me/+380687676757', icon: <FaWhatsapp />, label: 'WhatsApp' },

];

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <section className={`${styles.contacts} ${isOpen ? styles.expanded : ''}`}>
        <h2 className={styles.contactsHeader}> Contacts</h2>
        <div className={styles.contactsGroup}>
          <a href="https://github.com/sydorovay" className={styles.phoneLink}><FaGithub /> Git</a>
          <a href="mailto:sydorovay@gmail.com" className={styles.gmailLink}><FaEnvelope /> Gmail</a>
          <a href="tel:+491727616858" className={styles.phoneLink}><FaPhone /> Phone</a>
        </div>
        <button onClick={toggleList} className={styles.toggleButton}>
        </button>
        {isOpen && (
          <ul className={styles.contactList}>
            {contactLinks.map(({ id, href, icon, label }) => (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon} {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
};

export default Contact;
