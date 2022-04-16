import { BrowserRouter as Router,Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import MovieDetail from "../pages/MovieDetail";
import { AuthContext }from "../context/AuthContext";
import { useContext } from "react";



const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    let location = useLocation();
    if (!currentUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRouter />}>
            <Route path="/details/:id" element={<MovieDetail />} />
          </Route>
       </Routes>
    </Router>
  )
}

export default AppRouter