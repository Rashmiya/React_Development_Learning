import React from "react";
import userImage from "../assets/images/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contact;
  return (
    <div
      className="item "
      style={{
        padding: "10px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content" style={{ padding: "5px 10px 5px 10px" }}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ marginLeft: "auto", cursor: "pointer" }}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
