import { useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ menuOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        console.log("Закриття по Escape");
        onClose();
      }
    },
    [onClose]
  );

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
        <div
          className={styles.backdrop}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.link}>
            <NavLink to="/" onClick={onClose}>Home</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/about" onClick={onClose}>About me</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/contact" onClick={onClose}>Contacts</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/resume" onClick={onClose}>Резюме</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
