import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactsForm.module.css";
import { nanoid } from "nanoid";

export default function ContactsForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Enter name"
          required
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
          placeholder="Enter phone"
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
