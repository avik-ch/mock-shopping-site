import App from "./App";
import HomePage from "./components/homepage/HomePage";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/shoppage/Shop";
import Cart from "./components/cartpage/Cart";

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
