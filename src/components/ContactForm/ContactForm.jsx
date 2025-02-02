import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Invalid phone number format")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.ContactForm}>
        <label className={s.labelForm}>
          <span className={s.spanForm}>Name</span>
          <Field className={s.inputForm} type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.labelForm}>
          <span className={s.spanForm}>Number</span>
          <Field className={s.inputForm} type="text" name="number" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
