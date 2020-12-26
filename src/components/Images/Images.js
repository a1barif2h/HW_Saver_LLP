import React, { useState } from "react";
import Header from "../Home/Header/Header";
import logo from "../../images/welcome.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

const Images = () => {
  const [photo, setPhoto] = useState("");

  // const [clientId, setClientId] = useState(
  //   "9wcRXm_DuCADwpBm31s-JA6xw5aZxwtL8VGYpD39X1I"
  // );
  const id = "9wcRXm_DuCADwpBm31s-JA6xw5aZxwtL8VGYpD39X1I";

  const handleChange = (e) => {
    setPhoto(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://api.unsplash.com/search/photos?page=1$query=" +
      photo +
      "$client_id=" +
      id;
    console.log(url);

    axios.get(url).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Header logo={logo} bg={"primary"} color={"text-white"} />
      <Container>
        <Row>
          <Col sm={12}>
            <div>
              <h2>Unsplash Photo Search</h2>
              <Form>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="photo"
                    placeholder="Search for photos..."
                  />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Images;
