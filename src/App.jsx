import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header";

const App = () => {
  return (
    <section>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="offers" element={<Offers />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
