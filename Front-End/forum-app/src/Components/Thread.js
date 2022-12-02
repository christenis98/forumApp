import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Thread = () => {
  const handleClick = () => {
    console.log("hola");
  };

  return (
    <Card>
      <Card.Header>Thread Name</Card.Header>
      <Card.Body>
        <Card.Text>Thread description</Card.Text>
        <Button onClick={handleClick} variant="primary">
          New Post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Thread;
