import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";
import css from "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignup = (evt) => {
    evt.preventDefault();

    // console.log(evt.target.elements.password.value);
    dispatch(
      register({
        name: evt.target.elements.name.value,
        email: evt.target.elements.email.value,
        password: evt.target.elements.password.value,
      })
    );
  };

  return auth.isLoggedIn ? (
    <Navigate to="/contacts" />
  ) : (
    <div className={css.registerBox}>
      <form onSubmit={(evt) => handleSignup(evt)} className={css.registerForm}>
        <label className={css.registerLabel}>
          First name
          <input type="text" placeholder="First name" name="name" />
        </label>
        <label className={css.registerLabel}>
          Email
          <input type="email" placeholder="Email" name="email" />
        </label>
        <label className={css.registerLabel}>
          Password
          <input type="text" placeholder="Password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
