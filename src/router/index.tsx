import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RootLayout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import ErrorHandler from "../components/errors/ErrorHandler";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout /> } errorElement={<ErrorHandler/>}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
