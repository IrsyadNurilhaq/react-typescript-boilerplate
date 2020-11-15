/** Types */
import { routeType } from "./types";

/** Views */
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Verification from "../pages/Verification";

const paths: routeType[] = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/register",
    exact: true,
    Component: Register,
  },
  {
    path: "/login",
    exact: true,
    Component: Login,
  },
  {
    path: "/otp",
    exact: true,
    Component: Verification,
  },
];

export default paths;
