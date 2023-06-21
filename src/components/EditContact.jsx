import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import closeIcon from "../img/close.svg";

export default function EditContact(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [contacts, setContacts] = useState([]);
  const contacts = props.contacts;
  const [prevNo, setPrevNo] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const myContact = contacts.filter((item) => item.id == id)[0];
    setPrevNo(myContact.phone);
    setContact(myContact);
  }, []);

  const isExist = () =>
    contacts.filter((item) => {
      return item.phone == contact.phone;
    });

  const validateform = () => {
    let flag = true;
    if (!(contact.name.trim() && contact.phone)) {
      setErrMsg("Fill all the mandatary fields");
      flag = false;
    } else if (!/^\d{10}$/.test(contact.phone)) {
      setErrMsg("Phone no. must be 10 digits");
      flag = false;
    } else if (prevNo != contact.phone && isExist().length != 0) {
      setErrMsg("A contact with this phone no. already exist");
      flag = false;
    }

    return flag;
  };

  const updateContact = (e) => {
    e.preventDefault();
    if (validateform()) {
      const index = contacts.findIndex((obj) => obj.id == id);
      contacts[index] = { id: id, ...contact };
      localStorage.setItem("contacts", JSON.stringify(contacts));

      setContact({
        name: "",
        phone: "",
        email: "",
      });
      props.setFlag();
      navigate("/contacts-react");
    }
  };

  return (
    <>
      <div className="newContact">
        <h2>Editing contact</h2>
        <form onSubmit={(e) => updateContact(e)}>
          <div className="field">
            <label htmlFor="name" className="required">
              Name
            </label>
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
            <label htmlFor="phone" className="required">
              Phone no.
            </label>
            <input
              type="number"
              name="phone"
              id=""
              placeholder="Phone no."
              value={contact?.phone}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
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
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
          </div>
          <span className="errMessage">{errMsg}</span>
          <button type="submit" className="btn">
            Save
          </button>
        </form>
        <button
          className="btn closebtn"
          onClick={() => {
            navigate("/contacts-react");
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>

      <div
        className="backdrop"
        onClick={() => {
          navigate("/contacts-react");
        }}
      ></div>
    </>
  );
}
