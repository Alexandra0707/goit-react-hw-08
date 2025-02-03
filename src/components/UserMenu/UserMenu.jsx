import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import styles from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user?.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenuContainer}>
      <span className={styles.userName}>{userName}</span>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.linkButton}>
        Home
      </Link>
      {isLoggedIn && (
        <>
          <Link to="/contacts" className={styles.linkButton}>
            Contacts
          </Link>
          <UserMenu />
        </>
      )}
    </nav>
  );
};
