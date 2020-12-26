import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Comments = (props) => {
  const [users, setUsers] = useState({});
  let user = [];
  for (let i = 0; i < users.length; i++) {
    user = users[i];
  }
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  const { body, name } = props.comment;
  return (
    <div className="mt-5">
      <Card>
        <Card.Header as="h5">
          <img
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
            src={user.picture && user.picture.large}
            alt=""
          />
          <small className="mx-2">
            {`${user.name && user.name.first} ${user.name && user.name.last}`}
          </small>
        </Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comments;
