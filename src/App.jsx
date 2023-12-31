import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./components/PrivateRouter";
import ListHome from "./pages/listHome/ListHome";

const App = () => {
  return (
    <section>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/create-list" element={<PrivateRouter />}>
            <Route path="/create-list" element={<ListHome />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default App;
