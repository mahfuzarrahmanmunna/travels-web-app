import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import News from "../Components/News/News";
import Description from "../Components/Description/Description";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import Booking from "../Components/Booking/Booking";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('image.json'),
                hydrateFallbackElement: <p>Loading....</p>
            },
            {
                path: '/news',
                Component: News
            },
            {
                path: '/description',
                Component: Description
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/booking',
                Component: Booking
            }
        ]
    },
    {
        path: 'auth/login',
        Component: Login
    }
])