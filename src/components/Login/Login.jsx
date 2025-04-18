import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = (evt) => {
    evt.preventDefault();

    // console.log(evt.target.elements.password.value);
    dispatch(
      login({
        email: evt.target.elements.email.value,
        password: evt.target.elements.password.value,
      })
    );
  };

  return auth.isLoggedIn ? (
    <Navigate to="/contacts" />
  ) : (
    <div className={css.loginBox}>
      <form onSubmit={(evt) => handleLogin(evt)} className={css.loginForm}>
        <label className={css.loginLabel}>
          Email
          <input type="email" placeholder="Email" name="email" />
        </label>
        <label className={css.loginLabel}>
          Password
          <input type="text" placeholder="Password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
