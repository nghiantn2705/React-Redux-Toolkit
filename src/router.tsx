import { Navigate, createBrowserRouter } from "react-router-dom";
import List from "./components/List";
import AddProductForm from "./components/Formadd";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home page!</div>,
    },
    {
        path: "/about",
        element: <div>About!</div>,
    },
    {
        path: "/admin",
        element: (
            <div>
                Layout Admin
                
            </div>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="product" />,
            },
            {
                path: "product",
                element: <List/>,
            },
            {
                path: "product/add",
                element: <AddProductForm/>,
            },
        ],
    },
]);