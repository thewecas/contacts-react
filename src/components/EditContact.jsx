import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditContact(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [contacts, setContacts] = useState([]);
  const contacts = props.contacts;
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    setContact(contacts.filter((item) => item.id == id)[0]);
  }, []);
  const updateContact = (e) => {
    e.preventDefault();
    const index = contacts.findIndex((obj) => obj.id == id);
    console.log("index", index);
    contacts[index] = { id: id, ...contact };
    localStorage.setItem("contacts", JSON.stringify(contacts));

    setContact({
      name: "",
      phone: "",
      email: "",
    });
    props.setFlag();
    navigate("/");
  };

  return (
    <div className="newContact">
      <h2>New Contact</h2>
      <form onSubmit={(e) => updateContact(e)}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={contact?.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone no.</label>
          <input
            type="number"
            name="phone"
            id=""
            placeholder="Phone no."
            value={contact?.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email id"
            value={contact?.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
}
