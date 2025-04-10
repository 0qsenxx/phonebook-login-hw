import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactsList from "../components/ContactsList/ContactsList";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ContactsPage = () => {
  const auth = useSelector((state) => state.auth);

  return auth.isLoggedIn ? (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  ) : (
    <Navigate to="/registration" />
  );
};

export default ContactsPage;
