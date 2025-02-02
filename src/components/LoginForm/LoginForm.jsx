import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import { Link, Navigate } from "react-router-dom";
import s from "./LoginForm.module.css";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import * as Yup from "yup";
import { useState } from "react";

const LoginForm = () => {
  const isLoggedId = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const contactFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .min(3, "Too Short...")
      .required("Please, enter the email"),
    password: Yup.string()
      .min(6, "To Short...")
      .required("Please, enter your password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedId) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <Link className={s.btnGoBack} to={"/"}>
        <TfiArrowCircleLeft />
        Go Home
      </Link>
      <div className={s.loginDiv}>
        <h2 className={s.title}>Log In</h2>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={contactFormSchema}
        >
          <Form className={s.form}>
            <label className={s.label}>
              Email
              <Field
                className={s.field}
                name="email"
                placeholder="Enter  your email..."
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </label>
            <label className={s.label}>
              Password
              <div className={s.passwordWrapper}>
                <Field
                  className={s.field}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password..."
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
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default LoginForm;
