import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";
import checkout from "./pages/Checkout";
import Review from "./pages/Review";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Restaurants-Login" exact component={Login}/>
          <Route path="/Charities-Login" exact component={Login1}/>
          <Route path="/review" exact component={Review} />
          <Route path="/Checkout" exact component={checkout} />
          <Route path="*"><NotFound/></ Route>
        </Switch>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
