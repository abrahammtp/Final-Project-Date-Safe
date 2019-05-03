import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
// import "./App.css";
import Splash from "./pages/splash/splash"
import logIn from "./pages/login/login"
import Footer from "./components/Footer/footer";

function App () {
return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={logIn} />
        <Route exact path="/userPage" component={userPage} />
      </Switch>
    </div>
<Footer />
  </Router>
);
}

export default App;
