import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact(props) {
  const navigate = useNavigate();
  const contacts = props.contacts;
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const saveContact = (e) => {
    e.preventDefault();
    let id = Math.max(...contacts.map((obj) => obj.id)) + 1;
    id = id.toString() == "-Infinity" ? 1 : id;
    console.log("contact : ", contact);
    const isExist = contacts.filter((item) => {
      return item.phone == contact.phone;
    });
    if (isExist.length === 0) {
      contacts.push({ id: id, ...contact });
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
      alert("Phone no. already exist");
    }
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
      <form onSubmit={(e) => saveContact(e)}>
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            value={contact.name}
            required
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone no. *</label>
          <input
            type="number"
            name="phone"
            id=""
            placeholder="Phone no."
            value={contact.phone}
            required
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
