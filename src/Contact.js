export const fetchContatcs = () => {
  return JSON.parse(localStorage.getItem("contacts") || "[]");
};

export const contacts = fetchContatcs();

export const addContact = (object) => {
  const isExist = contacts.filter((contact) => {
    return contact.phone == object.phone;
  });
  if (isExist.length === 0) {
    contacts.push(object);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);
  } else {
    alert("Phone no. already exist");
  }
};

export const editContact = (id, object) => {
  const index = contacts.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...object };
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
};

export const deleteContact = (id) => {
  const index = contacts.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
};

export const getContact = (id) => {
  const index = contacts.findIndex((obj) => obj.id === id);
  return contacts[index];
};
