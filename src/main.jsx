import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import Root from "./components/Root/Root";
import Listed from "./components/Listed/Listed";
import ReadPage from "./components/ReadPage/ReadPage";
import BookDetails from "./components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/listed',
        element: <Listed />
      },
      {
        path: '/pages_read',
        element: <ReadPage />
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/books.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
