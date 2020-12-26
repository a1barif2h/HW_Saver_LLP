import React from "react";
import welcome from "../../../images/welcome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div style={{ background: "transparent", color: "#ffffff", width: "100%" }}>
      <div
        style={{
          width: "95%",
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "85%", margin: "auto" }}>
          <img style={{ width: "90%" }} src={welcome} alt="" />
        </div>
        <div className="text-center" style={{ width: "95%", height: "148px" }}>
          <h2>Login To Continue</h2>
          <button
            style={{
              width: "80%",
              outline: "none",
              borderRadius: "25px",
              color: "#fff",
              padding: "10px",
              border: "1px solid tomato",
              background: "transparent",
            }}
          >
            {`Continue with `}
            <FontAwesomeIcon
              className="mr-auto"
              style={{ fontSize: "25px", color: "#ff0000" }}
              icon={faGoogle}
            />
            oogle
          </button>
          <p className="text-center">
            <span className="mx-2">Don’t have an account?</span>
            <span style={{ color: "#eed91d", cursor: "pointer" }}>
              {`Create an account :)`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
