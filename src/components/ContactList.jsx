import React from "react";
import CardContact from "./CardContact";

const ContactList = ({ contacts, Delete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}></center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts.map((item) => (
          <CardContact
            key={item.id}
            item={item}
            Delete={Delete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
