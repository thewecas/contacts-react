import { useState } from "react";

export default function EditContact(props) {
  const { id, name, phone, email } = props.contact;
  const [contact, setContact] = useState({
    name: name,
    phone: phone,
    email: email,
  });
  const saveContact = (e) => {
    e.preventDefault();
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
          <label htmlFor="email">Email</label>
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
