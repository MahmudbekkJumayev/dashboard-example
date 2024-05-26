import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Pulse from "../pages/Pulse/Pulse";
import Coinstack from "../pages/Coinstack/Coinstack";
import Documents from "../pages/Documents/Documents";
import Envelope from "../pages/Envelope/Envelope";
import Messages from "../pages/Messages/Massages";
import Cart from "../pages/Cart/Cart";
import Calendar from "../pages/Calendar/Calendar";
import Circle from "../pages/Circle/Circle";
import LineChart from "../pages/LineChart/LineChart";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, // Bu 'index' marshrutidir
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/linechart",
        element: <LineChart />,
      },
      {
        path: "/pulse",
        element: <Pulse />,
      },
      {
        path: "/coinstack",
        element: <Coinstack />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/envelope",
        element: <Envelope />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dotcircle",
        element: <Circle />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
