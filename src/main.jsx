
import { createRoot } from 'react-dom/client'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import {HomePage, Login, PageNotFound, ProductDetail, ProductsList, Register} from './pages/';
import { ToastContainer } from 'react-toastify';
import { FilterProvider } from './context/FilterContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ScrollToTop } from './components/index.js';
import CartPage from './pages/cart/CartPage.jsx';




const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <PageNotFound/>,
        children : [
            {
                path : "/",
                element : <HomePage/>
            },
            {
                path : "products",
                element : <ProductsList/>
            },
            {
                path : "products/:id",
                element : <ProductDetail />
            },
            {
                path : "cart",
                element : <CartPage/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            }
        ]
    }
]);


createRoot(document.getElementById('root')).render(
            <RouterProvider router={router} >
    <CartProvider>
        <FilterProvider>
            <ScrollToTop/>
            <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
        </FilterProvider>
    </CartProvider>
    </RouterProvider>
)
