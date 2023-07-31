import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import About from '../../Components/About/About';
import Contact from '../../Components/ContactUs/Contact/Contact';
import Home from '../../Components/Home/Home';
import Login from '../../Components/Login/Login';
import Cart from '../../Components/Shop/Cart/Cart';
import CheckOutForm from '../../Components/Shop/Cart/Payment/CheckOutForm';
import Payment from '../../Components/Shop/Cart/Payment/Payment';
import ProductDetails from '../../Components/Shop/ProductDetails/ProductDetails';
import Shop from '../../Components/Shop/Shop/Shop';
import SignUp from '../../Components/SignUp/SignUp';
import LoginLayout from '../../Layout/LoginLayout';
import Main from '../../Layout/Main';
import Blog from '../../Components/Blog/Blog/Blog';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/shop',
                element: <Shop></Shop>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/details/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/cart/:id',
                element: <Cart></Cart>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
           
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout',
                element: <CheckOutForm></CheckOutForm>
            }
        ]
    }
    
])

export default router;