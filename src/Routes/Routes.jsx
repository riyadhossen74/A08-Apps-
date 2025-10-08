import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import InstallApp from "../InstallApp/InstallApp";
import AllApps from "../AllApps/AllApps";
import InstallNowSection from "../InstallNowSection/InstallNowSection";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
    index: true, 
    element: <Home></Home>,
  },
        {
    path: '/app', 
    element: <AllApps></AllApps>,
  },
        {
    path:'/install' , 
    element: <InstallApp></InstallApp>,
  },
        {
    path:'/app/:id' , 
    element: <InstallNowSection></InstallNowSection>,
  },
    ]
  },
  
]);
export default router