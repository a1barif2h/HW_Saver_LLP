import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchApod } from "../../../redux";
import logo from "../../../images/welcome_blue.png";
import Header from "../Header/Header";
import "./Home.css";

const Home = ({ apodData, fetchApod }) => {
  console.log(apodData);
  const bgImage = apodData.loading
    ? "https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    : apodData.url;
  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url(${bgImage})`,
      }}
    >
      <Header logo={logo} bg={"transparent"} color={"text-white"} />
      <Card
        className="m-auto mt-4"
        style={{ width: "90%", background: "transparent", color: "#fff" }}
      >
        <Card.Body>
          <Card.Title className="display-4">{apodData.title}</Card.Title>
          <Card.Text>
            <h3>{apodData.copyright}</h3>
          </Card.Text>
          <Card.Text>
            <h4>{apodData.date}</h4>
          </Card.Text>
          <Card.Text>
            <h5>{apodData.explanation}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apodData: state.apod.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApod: () => dispatch(fetchApod()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
