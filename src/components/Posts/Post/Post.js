import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { body, title, id } = props.post;
  return (
    <div className="mt-5">
      <Card>
        <Card.Header as="h5">Post- {id} </Card.Header>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{body}</Card.Text>
          <Link style={{ textDecoration: "none" }} to={"/post/" + id}>
            <Button variant="contained" color="primary">
              See More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
