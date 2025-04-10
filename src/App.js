import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./components/Login/Login";
import ContactsPage from "./pages/ContactsPage";
import { refreshUser } from "./redux/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default App;
