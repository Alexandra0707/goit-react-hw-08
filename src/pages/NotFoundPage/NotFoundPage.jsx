import { TfiArrowCircleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.div}>
      <Link className={s.btnGoBack} to={"/"}>
        <TfiArrowCircleLeft />
        Go Home
      </Link>
      <h2 className={s.title}>Ooops... Page is not found!</h2>
    </div>
  );
};

export default NotFoundPage;
