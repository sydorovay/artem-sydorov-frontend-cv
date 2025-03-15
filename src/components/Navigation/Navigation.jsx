import { useEffect, useCallback } from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ menuOpen, onClose }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      console.log("Закриття по Escape");
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, handleKeyDown]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      console.log("Закриття по бекдропу");
      onClose();
    }
  };

  return (
    <>
      {menuOpen && (
        <div className={styles.backdrop} onClick={handleBackdropClick} />
      )}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.link}><a href="/">Home</a></li>
          <li className={styles.link}><a href="/about">About me</a></li>
          <li className={styles.link}><a href="/contact">Contacts</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
