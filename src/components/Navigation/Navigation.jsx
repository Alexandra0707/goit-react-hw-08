import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useState } from 'react';

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.linkButton}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={styles.linkButton}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
