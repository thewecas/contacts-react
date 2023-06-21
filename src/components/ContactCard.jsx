import { Link } from "react-router-dom";
import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import mailIcon from "../img/mail.svg";
import phoneIcon from "../img/phone.svg";
import img from "../img/user.png";

export default function ContactCard(props) {
  const { id, name, phone, email } = props.contact;
  const sendDeleteId = () => {
    props.setDeleteId(id);
  };

  return (
    <div className="contact">
      <img src={img} alt="avatar" className="avatar" />
      <h3 className="name">{name}</h3>
      <p className="phone">
        <img src={phoneIcon} alt="" />
        {phone}
      </p>
      <p className="email">
        {email ? <img src={mailIcon} alt="" /> : ""}
        <span className="email">{email}</span>
      </p>
      <div className="btns">
        <Link className="btn" to={"/contacts-react/edit/" + id}>
          <img src={editIcon} alt="" />
        </Link>
        <button className="btn" onClick={sendDeleteId}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
