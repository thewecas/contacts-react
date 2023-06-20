import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const contacts = props.contacts;

  const getDeleteId = (id) => {
    props.setDeleteContactId(id);
  };

  return (
    <div className="contact-list">
      <h2>My Contacts</h2>
      <div className="contacts-container">
        {contacts &&
          contacts.map((contact) => {
            return (
              <ContactCard
                contact={contact}
                setDeleteId={getDeleteId}
                key={contact.id}
              ></ContactCard>
            );
          })}
      </div>
    </div>
  );
}
