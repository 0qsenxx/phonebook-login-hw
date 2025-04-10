import styles from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContact } from "../../redux/contacts/contactsOperations";

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteContact = (evt) => {
    const idContactToDelete = evt.target.getAttribute("data-id");
    dispatch(deleteContact(idContactToDelete));
  };

  return (
    <ul>
      {filter.length !== 0
        ? contacts
            .filter((contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  data-id={contact.id}
                  onClick={(evt) => handleDeleteContact(evt)}
                >
                  Delete
                </button>
              </li>
            ))
        : contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                data-id={contact.id}
                onClick={(evt) => handleDeleteContact(evt)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

export default ContactsList;
