import React from "react";
import { useState } from "react";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import EditContacts from "./components/EditContacts";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // create
  function createContact(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  console.log(contacts);

  // DELETE

  function Delete(id) {
    let newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }

  // EDIT
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editProduct, setEditProduct] = useState({});

  function handleEdit(id) {
    let obj = contacts.filter((item) => item.id == id);
    setEditProduct(obj[0]);
    handleEditShow();
  }

  function handleSave(editedObj) {
    let newProducts = contacts.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContacts(newProducts);
    setShowEditModal(false);
  }

  return (
    <div>
      <AddContacts createContact={createContact} />
      <ContactList
        contacts={contacts}
        Delete={Delete}
        handleEdit={handleEdit}
      />
      {showEditModal && (
        <EditContacts
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editProduct={editProduct}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
