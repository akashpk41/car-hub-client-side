import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./Pages/Home/About/About";
import AddNewItems from "./Pages/Home/Add_New_Items/AddNewItems";
import Blog from "./Pages/Home/Blog/Blog";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login_and_Register/Login/Login";
import Register from "./Pages/Home/Login_and_Register/Register/Register";
import ManageInventory from "./Pages/Home/Manage_Inventory/ManageInventory";
import MyItems from "./Pages/Home/My_Items/MyItems";

import NotFound from "./Pages/Home/Not_Found/NotFound";
import PrivateRoute from "./Pages/Home/Private_Route/PrivateRoute";
import UpdateItemDetails from "./Pages/Home/Update_Item_Details/UpdateItemDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/add-items"
          element={
            <PrivateRoute>
              <AddNewItems />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-items"
          element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }
        />
        <Route
          path="/manage-inventory"
          element={
            <PrivateRoute>
              <ManageInventory />
            </PrivateRoute>
          }
        />
        <Route
          path="/inventory/:itemId"
          element={
            <PrivateRoute>
              <UpdateItemDetails />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
