import { Routes, Route, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes } from "./PublicRoutes";
import { EmailRoutes } from "./EmailRoutes";
import { Unauth403 } from "../pages/Unauth403";

export const AppRoutes = () => {
  const { isLogged } = useSelector((state: any) => state.auth);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/email/*"
          element={isLogged ? <EmailRoutes /> : <Unauth403 />}
        />
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </HashRouter>
  );
};
