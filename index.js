const contacts = require("./db/contacts");
console.log(contacts);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getByID":
      const getContact = await contacts.getContactById(id);
      return console.log(getContact);
    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
          return console.log(newContact);
      case "removeContact":
          const 
  }
};

invokeAction({ action: "read" });
invokeAction({ action: "getByID", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({
  action: "addContact",
  name: "John",
  email: "test@ukr.net",
  phone: "544-54-54",
});
invokeAction({action: 'removeContact', id: 'drsAJ4SHPYqZeG-83QTVW'})
