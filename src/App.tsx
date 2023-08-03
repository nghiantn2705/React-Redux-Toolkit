import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import List from "./components/List";
import AddProductForm from "./components/Formadd";

function App() {
  return (
    <div>
      <RouterProvider router={router} /> 
      <List/>
      <AddProductForm/>
    </div>
  );
}

export default App;
