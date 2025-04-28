import {createBrowserRouter, RouterProvider,} from "react-router";
import Root from "../../Layout/Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import MyBookings from "../MyBookings/MyBookings";
import Blogs from "../Blogs/Blogs";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ErrorLawer from "../ErrorPage/ErrorLawer";
import Loader from "../../components/Loader/Loader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader:()=> fetch('../Data.json'),
                hydrateFallbackElement: <Loader/>,
                Component: Home,
            },
            {
                path: "/my-bookings",
                Component: MyBookings,
            },
            {
                path: "/blogs",
                loader:()=> fetch('../BlogData.json'),
                hydrateFallbackElement: <Loader/>,
                Component: Blogs,
            },
            {
                path: "/lawer/:id",
                loader: () => fetch('../Data.json'),
                hydrateFallbackElement: <Loader/>,
                Component: ProfileDetails,
                errorElement: <ErrorLawer></ErrorLawer>,
            }
        ]
    },
]);