import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from "../../../images/welcome.png";
import Header from "../../Home/Header/Header";
import Comments from "../Comments/Comments";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + postId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url =
      "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);
  return (
    <div>
      <Header logo={logo} bg={"primary"} color={"text-white"} />
      <Container>
        <Card>
          <Card.Header as="h5">Post No: {postId}</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
        <Row>
          {comments.map((comment) => (
            <Col key={comment.id} sm={12}>
              <Comments comment={comment}></Comments>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PostDetails;
