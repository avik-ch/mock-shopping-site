import App from "./App";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
