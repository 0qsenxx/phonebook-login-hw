import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";

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
    <div>
      <form onSubmit={(evt) => handleSignup(evt)}>
        <label>
          First name
          <input type="text" placeholder="First name" name="name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Email" name="email" />
        </label>
        <label>
          Password
          <input type="text" placeholder="Password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
