import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Thread = () => {
  return (
    <Card>
      <Card.Header>Thread Name</Card.Header>
      <Card.Body>
        <Card.Text>Thread description</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Thread;
