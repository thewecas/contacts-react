import { Link } from "react-router-dom";
import newIcon from "../img/add.svg";
export default function Header() {
  return (
    <div className="header">
      <h1>Contacts</h1>
      <Link className="btn" to="/contacts-react/new">
        &nbsp;
        <img src={newIcon} alt="" />
        <p>&nbsp;</p>
      </Link>
    </div>
  );
}
