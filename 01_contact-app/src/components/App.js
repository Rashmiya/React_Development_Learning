import React, { useEffect, useState } from "react";
import "./css/App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { v4 as uuid } from "uuid";

function App() {
  // static contact list -- instead of this we will use React Hooks
  // const contacts = [
  //   { id: "1", name: "Rashmiya", email: "rashmiya99@gmail.com" },
  //   { id: "2", name: "John Doe", email: "john@gmail.com" },
  //   { id: "3", name: "ritech", email: "ritech@gmail.com" },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  // Get back from local Storage
  useEffect(() => {
    const retrivedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrivedContacts.length > 0) {
      setContacts(retrivedContacts);
    }
  }, []);
  // Store in Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container app-container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactID={removeContactHandler} />
    </div>
  );
}

export default App;
