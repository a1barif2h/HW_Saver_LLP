import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchApod } from "../../../redux";
import Header from "../Header/Header";
import "./Home.css";

const Home = ({ apodData, fetchApod }) => {
  const bgImage = apodData.loading
    ? "https://apod.nasa.gov/apod/image/2012/WinterSceneBlock.jpg"
    : apodData.url;
  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <div>
      <Header />
      <div
        id="home_container"
        style={{
          minHeight: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url(${bgImage})`,
        }}
      >
        <h1 className="text-white"> {apodData.copyright} </h1>
      </div>
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
