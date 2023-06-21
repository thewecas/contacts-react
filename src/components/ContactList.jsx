import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const contacts = props.contacts;
  console.log("->", contacts);
  console.log("<->", typeof contacts);
  const getDeleteId = (id) => {
    props.setDeleteContactId(id);
  };

  return (
    <div className="contact-list">
      <div className="contacts-container">
        {contacts.length >= 1 ? (
          contacts.map((contact) => {
            return (
              <ContactCard
                contact={contact}
                setDeleteId={getDeleteId}
                key={contact.id}
              ></ContactCard>
            );
          })
        ) : (
          <h2 className="noContact">No Contacts...!</h2>
        )}
      </div>
    </div>
  );
}
