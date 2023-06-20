import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("rendering");
    setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"));
  }, [flag]);

  const deleteContact = (id) => {
    const index = contacts.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      setFlag(!flag);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route
            path="/new"
            element={
              <AddContact
                contacts={contacts}
                setFlag={() => {
                  setFlag(!flag);
                }}
              ></AddContact>
            }
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                setFlag={() => {
                  setFlag(!flag);
                }}
              ></EditContact>
            }
          ></Route>
        </Routes>

        <ContactList
          contacts={contacts}
          setDeleteContactId={deleteContact}
        ></ContactList>
      </div>
    </Router>
  );
}

export default App;
