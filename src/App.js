import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navigation from "./components/Navigation/Navbar";
import Login from "./login/LoginPage.jsx";
import Contact from "./contact/Contact";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./admin/Admin";
import GetPostDetails from "./components/Layout/PostDetails";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posts/:id" element={<GetPostDetails />} />
        </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
