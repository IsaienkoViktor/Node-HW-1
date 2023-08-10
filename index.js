const contacts = require("./db/contacts");

const { program } = require("commander");

program
  .option("-a, --action, <type>, 'choose action'")
  .option("i, --id, <type>, 'user id'")
  .option("n, --name, <type>, 'user name'")
  .option("e, --email, <type>, 'user email'")
  .option("p, --phone, <type>, 'user phone'");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "getByID":
      const getContact = await contacts.getContactById(id);
      return console.log(getContact);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "updateByID":
      const updateContact = await contacts.updateById(id, name, email, phone);
      return console.log(updateContact);
    case "removeById":
      const removeContact = await contacts.removeById(id);
      return console.log(removeContact);
    default:
      return console.warn("Unknown action type");
  }
};

invokeAction(options);
