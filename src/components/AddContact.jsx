import { useState } from "react";
import { contacts } from "../Contact";

export default function AddContact(props) {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const saveContact = (e) => {
    e.preventDefault();
    let id = Math.max(...contacts.map((obj) => obj.id)) + 1;
    id = id.toString() == "-Infinity" ? 1 : id;
    props.addContactHandler({ id: id, ...contact });
    setContact({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="newContact">
      <h2>New Contact</h2>
      <form onSubmit={(e) => saveContact(e)}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={contact.name}
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
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Enail</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email id"
            value={contact.email}
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
