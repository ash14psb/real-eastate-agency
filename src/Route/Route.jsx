//import React from 'react';//
import Main from '../Layout/Main/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Conatct/Contact';
import NotFound from '../Pages/Shared/NotFound/NotFound';

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            },
        ]
    }
])

export default Route;