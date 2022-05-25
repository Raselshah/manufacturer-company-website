import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LogIn from "./Pages/Login/LogIn";
import NavMenu from "./Pages/NavMenu/NavMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Pages/SignUp/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import UserProfile from "./Pages/UserProfile/UserProfile";
import DashBoard from "./Pages/Dashboard/DashBoard";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import Orders from "./Pages/Dashboard/Orders";
import Review from "./Pages/Dashboard/Review";
import RequireAdmin from "./Shared/RequireAdmin/RequireAdmin";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Payment from "./Pages/Payment/Payment";
import NotAPage from "./Pages/NotAPage/NotAPage";
import AddProducts from "./Pages/AddProducts/AddProducts";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import ManageOrders from "./Pages/Dashboard/ManageOrders";

function App() {
  return (
    <div className="max-w-screen-2xl px-6 mx-auto App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route path="orders" element={<Orders />} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route path="review" element={<Review />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="addProducts" element={<AddProducts />} />
          <Route path="manageProducts" element={<ManageProduct />} />
          <Route path="manageOrders" element={<ManageOrders />} />
        </Route>

        {/* <Route path="/userProfile" element={<UserProfile />} /> */}
        <Route path="/userProfile" element={<MyProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotAPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
