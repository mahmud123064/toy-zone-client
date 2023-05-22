import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AllToysDetails from "../Pages/AllToysDetails/AllToysDetails";
import AddaToy from "../Pages/AddaToy/AddaToy";
import MyToy from "../Pages/MyToy/MyToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:
              <Blog></Blog>
          
        },
        {
          path:"/alltoys",
          element:<AllToys></AllToys>
        },
        {
          path:'/alltoysdetails/:id',
          element:(
            <PrivateRoute>
              <AllToysDetails></AllToysDetails>
            </PrivateRoute>
          ),
          loader: ({params})=> fetch(`https://toy-truck-server.vercel.app/alltoys/${params.id}`)
        },
        {
          // path:'/addatoy/:id'
          path:'/addatoy',
          element:(
            <PrivateRoute>
              <AddaToy></AddaToy>,
            </PrivateRoute>
          )
          // loader: ({params})=> fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path:'/mytoy',
          element:(
            <PrivateRoute>
              <MyToy></MyToy>
            </PrivateRoute>
          )
        }
      ]
    },
  ]);

  export default router;
