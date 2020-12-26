import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Welcome/Login/Login";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Welcome />
      {/* <Login /> */}
    </Router>
  );
}

export default App;
