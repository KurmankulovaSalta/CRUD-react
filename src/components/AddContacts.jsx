import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const AddContacts = ({ createContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  console.log(name, surname, phone, email);

  function ContactAdd() {
    if (!name || !surname || !phone || !email) {
      alert("some inputs are empty");
      return;
    }
    let newObj = {
      name,
      surname,
      phone,
      email,
      id: Date.now(),
    };
    createContact(newObj);

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  }

  return (
    <>
      <div style={{ marginLeft: "500px", marginTop: "30px" }}>
        <h1>ContactBook</h1>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Surname</p>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <p>Phone Number</p>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        style={{ marginLeft: "500px", marginTop: "10px" }}
        variant="primary"
        onClick={ContactAdd}
      >
        Create
      </Button>
    </>
  );
};

export default AddContacts;
