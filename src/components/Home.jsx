import { useEffect, useState } from "react";
import { Outlet, Route, Switch } from "react-router-dom";
import "../App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("rendering");
    setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"));
  }, [flag]);

  const saveContact = (contact) => {};

  const deleteContact = (id) => {
    const index = contacts.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      setFlag(!flag);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>

      <ContactList
        contacts={contacts}
        setDeleteContactId={deleteContact}
      ></ContactList>
    </div>
  );
}
