import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Thread = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [newPortButtonAbled, setNewPortButtonAbled] = useState(true);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Question", value: "1" },
    { name: "Suggestion", value: "2" },
    { name: "Clarification", value: "3" },
  ];
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const titleChangedHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  useEffect(() => {
    if (title.length > 0) {
      setNewPortButtonAbled(false);
    } else setNewPortButtonAbled(true);
  }, [title]);

  return (
    <>
      <Card>
        <Card.Header>Thread Name</Card.Header>
        <Card.Body>
          <Card.Text>Thread description</Card.Text>

          <Form>
            <Col sm="10">
              <Form.Control
                onChange={titleChangedHandler}
                placeholder="New Post Title"
              ></Form.Control>
            </Col>
            <Button
              onClick={handleShow}
              variant="primary"
              disabled={newPortButtonAbled}
            >
              New Post
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post: {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ButtonGroup aria-label="Basic example">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={"outline-success"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post Body</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Thread;
