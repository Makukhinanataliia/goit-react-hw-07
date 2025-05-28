import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <p className={styles.text}>
        <span className={styles.name}>{name}</span>: {phone}
      </p>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
}
