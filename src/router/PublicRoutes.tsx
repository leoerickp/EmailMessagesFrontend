import { Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { SignUp } from "../pages/SignUp";

export const PublicRoutes = () => {
  return (
    <div className="auth-container">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
};
