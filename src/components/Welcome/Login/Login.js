import React, { useContext } from "react";
import welcome from "../../../images/welcome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser({
          ...loggedInUser,
          user: {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          },
        });
        firebase.auth().currentUser.getIdToken(true);
      })
      .then((token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
            onClick={handelGoogleSignIn}
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
            <span
              onClick={handelGoogleSignIn}
              style={{ color: "#eed91d", cursor: "pointer" }}
            >
              {`Create an account :)`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
