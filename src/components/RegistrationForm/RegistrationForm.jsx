import s from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import * as Yup from "yup";
import { useState } from "react";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("This account already exists. Please try logging.");
      });
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short...")
      .max(20, "Too Long!")
      .required("Please, enter your name"),
    email: Yup.string()
      .email("Invalid email address")
      .min(3, "Too Short...")
      .required("Please, enter the email"),
    password: Yup.string()
      .min(6, "To Short...")
      .required("Please, enter your password"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <>
      <Link className={s.btnGoBack} to={"/"}>
        <TfiArrowCircleLeft />
        Go Home
      </Link>
      <div className={s.registerDiv}>
        <h2 className={s.title}>Create your account</h2>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={contactFormSchema}
        >
          <Form className={s.form}>
            <label className={s.label}>
              Name
              <Field
                className={s.field}
                name="name"
                placeholder="Enter name..."
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </label>
            <label className={s.label}>
              Email
              <Field
                className={s.field}
                name="email"
                placeholder="Enter email..."
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </label>
            <label className={s.label}>
              Password
              <div className={s.passwordWrapper}>
                <Field
                  className={s.field}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password..."
                />
                <button
                  type="button"
                  className={s.showPasswordBtn}
                  onClick={togglePasswordVisibility}
                >
                  {" "}
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage
                className={s.error}
                name="password"
                component="span"
              />
            </label>

            <button className={s.btn} type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={s.svg}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Create account
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default RegisterForm;
