const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(id) {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data).find((contact) => contact.id === id) || null;
}

async function removeContact(id) {
  const getContact = await listContacts();
  const removedContacts = getContact.filter((contact) => contact.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(removedContacts, null, 2));
}

async function addContact(name, email, phone) {
  const addNewContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const getContact = await listContacts();
  getContact.push(addNewContact);
  await fs.writeFile(contactsPath, JSON.stringify(getContact, null, 2));
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
