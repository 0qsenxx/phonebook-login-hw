import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import Cookies from "js-cookie";
import css from "./Navigation.module.css";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(Cookies.get("phoneBookToken")));
    // Cookies.remove("phoneBookToken");
  };

  return (
    <nav
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: "20px",
      // }}
      className={css.headerNav}
    >
      <Link to="/" className={css.navLink}>
        Home
      </Link>
      {auth.isLoggedIn ? (
        <>
          <Link to="/contacts" className={css.navLink}>
            Contacts
          </Link>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/registration" className={css.navLink}>
            Registration
          </Link>
          <Link to="/login" className={css.navLink}>
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
