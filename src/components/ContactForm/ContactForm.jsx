import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactForm.module.css";
import { useRef } from "react";
import { addContact } from "../../redux/contacts/contactsOperations";

const ContactForm = () => {
  const nameInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleAddContact = (evt) => {
    evt.preventDefault();

    const contactExists = contacts.some((contact) =>
      contact.name
        .toLowerCase()
        .includes(evt.target.elements.contactName.value.toLowerCase())
    );

    if (contactExists) {
      alert(`${evt.target.elements.contactName.value} is already in contacts.`);
      evt.target.reset();
      return;
    }
    
    dispatch(
      addContact({
        name: evt.target.elements.contactName.value,
        number: evt.target.elements.contactNumber.value,
      })
    );
    evt.target.reset();
  };

  const submitForm = (evt) => {
    handleAddContact(evt);
    nameInputRef.current.focus();
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      numberInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={(evt) => submitForm(evt)} className={styles.contactForm}>
      <label>Name</label>
      <input
        type="text"
        name="contactName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={styles.contactName}
        ref={nameInputRef}
        onKeyDown={handleKeyPress}
      />
      <label className={styles.contactNumberLabel}>Number</label>
      <input
        type="tel"
        name="contactNumber"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={styles.contactNumber}
        ref={numberInputRef}
      />
      <button type="submit" className={styles.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
