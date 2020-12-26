import React, { useEffect, useState } from "react";
import Header from "../Home/Header/Header";
import logo from "../../images/welcome.png";
import { fetchPosts } from "../../redux";
import { connect } from "react-redux";
import Post from "./Post/Post";
import { Col, Container, Row } from "react-bootstrap";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Header logo={logo} bg={"primary"} color={"text-white"} />
      <Container>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} sm={12}>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postsData: state.posts.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
