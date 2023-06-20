import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Contacts</h1>
      <Link to="/new">New</Link>
    </div>
  );
}
