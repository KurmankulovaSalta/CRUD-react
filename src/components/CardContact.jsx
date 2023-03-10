import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardContact({ item, Delete, handleEdit }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "40px" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.surname}</Card.Text>
        <Card.Text>{item.phone}</Card.Text>
        <Card.Text>{item.email}</Card.Text>
        <Button onClick={() => Delete(item.id)} variant="danger">
          Delete
        </Button>
        <Button onClick={() => handleEdit(item.id)} variant="success">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardContact;
