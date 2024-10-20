import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import ListedBooks from './Components/ListedBooks';
import PagesToRead from './Components/PagesToRead';
import Root from './Components/Root';
import BookDetail from './Components/BookDetail';
import ReadList from './Components/ReadList';
import WishList from './Components/WishList';
import Error from './Components/Error';
import New from './Components/New';
import About from './Components/About';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Login';
import Register from './Components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => (fetch("http://localhost:5001/books")),
        element: <Home></Home>

      },

      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listed_books",
            element: <ReadList></ReadList>,
            loader: () => (fetch("/fake.json")),
          },
          {
            path: "ReadList",
            element: <ReadList></ReadList>,
            loader: () => (fetch("/fake.json")),
          },
          {
            path: "WishList",
            element: <WishList></WishList>,
            loader: () => (fetch("/fake.json")),
          },
          {
            path: "ReadList/:state",
            element: <ReadList></ReadList>,
            loader: () => (fetch("/fake.json")),
          },
          {
            path: "WishList/:state",
            element: <WishList></WishList>,
            loader: () => (fetch("/fake.json")),
          }

        ]
      },
      {
        path: "/pgtr",
        loader: () => (fetch("/fake.json")),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader:({params})=>fetch(`http://localhost:5001/books/${params.bookId}`)
      },
      {
        path: "/new",
        element: <New></New>,
        loader: () => (fetch("new.json"))
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/login",
        element:<Login></Login>

      },
      {
        path:"register",
        element:<Register></Register>
      }

    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode >,
)
