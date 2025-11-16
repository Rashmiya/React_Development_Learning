import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });

  return (
    <div className="ui celled list">
      <div>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
