import React from "react";
import "./css/App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    { id: "1", name: "Rashmiya", email: "rashmiya99@gmail.com" },
    { id: "2", name: "John Doe", email: "john@gmail.com" },
    { id: "3", name: "ritech", email: "ritech@gmail.com" },
  ];
  return (
    <div className="ui container app-container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
