import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from "./components/Albums/Albums";
import Home from "./components/Home/Home/Home";
import Images from "./components/Images/Images";
import PostDetails from "./components/Posts/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";
import Welcome from "./components/Welcome/Welcome";
import store from "./redux/store";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Provider store={store}>
        {loggedInUser.user && loggedInUser.user.name ? (
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/posts">
                <Posts />
              </Route>
              <Route path="/post/:postId">
                <PostDetails />
              </Route>
              <Route exact path="/albums">
                <Albums />
              </Route>
              <Route exact path="/images">
                <Images />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Welcome />
        )}
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
