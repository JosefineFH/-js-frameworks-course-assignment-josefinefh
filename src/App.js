import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home/Home";
import Navigation from "./components/Navigation/Navbar";
import Login from "./login/Login";
import Contact from "./contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
