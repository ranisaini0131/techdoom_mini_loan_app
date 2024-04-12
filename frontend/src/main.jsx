import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import RepaymentPage from "./pages/RepaymentPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ApplicationProcess from "./pages/ApplicationProcess.jsx";
import CreateLoan from "./pages/CreateLoan.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="create-loan" element={<CreateLoan />} />
      <Route path="aplication-process" element={<ApplicationProcess />} />
      <Route path="user-details" element={<UserDetails />} />
      <Route path="repayment" element={<RepaymentPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
