import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <p>
            <FaUser />
            {name}
          </p>
          <p>
            <FaPhoneAlt />
            {number}
          </p>
        </div>
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
