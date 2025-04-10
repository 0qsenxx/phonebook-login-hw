import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import Cookies from "js-cookie";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(Cookies.get("phoneBookToken")));
    // Cookies.remove("phoneBookToken");
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>
      {auth.isLoggedIn ? (
        <>
          <Link to="/contacts">Contacts</Link>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
