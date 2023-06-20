import { useEffect, useState } from "react";
import "../App.css";
import ContactList from "./ContactList";
import Header from "./Header";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("rendering");
    setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"));
  }, [flag]);

  const saveContact = (contact) => {
    const isExist = contacts.filter((item) => {
      return item.phone == contact.phone;
    });
    if (isExist.length === 0) {
      contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      setFlag(!flag);
    } else {
      alert("Phone no. already exist");
    }
  };

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
      {/* <Outlet></Outlet> */}

      {/* <AddContact addContactHandler={saveContact}></AddContact> */}
      <ContactList
        contacts={contacts}
        setDeleteContactId={deleteContact}
      ></ContactList>
    </div>
  );
}
