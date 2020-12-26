import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Albums from "./components/Albums/Albums";
import Home from "./components/Home/Home/Home";
import Images from "./components/Images/Images";
import Posts from "./components/Posts/Posts";
import Login from "./components/Welcome/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Welcome /> */}
        <Home />
        {/* <Images /> */}
        {/* <Posts /> */}
        {/* <Albums /> */}
      </Router>
    </Provider>
  );
}

export default App;
