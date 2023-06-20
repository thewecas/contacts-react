// import img from "../img/user.png";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, phone, email } = props.contact;
  // const navigate = useNavigate();
  const sendDeleteId = () => {
    props.setDeleteId(id);
  };

  return (
    <div className="contact">
      {/* <img src={img} alt="avatar" /> */}
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="btns">
        <Link to={"/edit/" + id}>edit</Link>
        <button onClick={sendDeleteId}>delete</button>
      </div>
    </div>
  );
}
