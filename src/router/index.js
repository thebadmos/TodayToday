import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/home/index";
import Login from "../pages/auth/login";
import Forgot from "../pages/auth/authPassword/forgot-password"
import NewPass from "../pages/auth/authPassword/new-password"
import EmailAct from "../pages/auth/email/email-activate"
import EmailConfirm from "../pages/auth/email/email-confirm"
import LandingPage from "../pages/dashboard/dashboard"
import LoginDashboard from "../pages/homeDashboard/index"
import Profile from "../pages/dashboard/profile"
import Settings from "../pages/settings/index"
import HighestPrices from "../pages/dashboard/subCategory/HighestPrices"
import LowestPrices from "../pages/dashboard/subCategory/LowestPrices"
import AppLayout from "../components/layouts/inappLayout";
import SettingLayout from "../components/layouts/settingLayout"
import Register from "../pages/auth/register";
import AuthLayout from "../components/layouts/authLayout";
import ProductDetails from "../pages/dashboard/productDetails/index"
import GadgetsScreen from "../pages/categories/gadgetsScreen";
import GadgetsBrands from "../pages/categories/gadgetsBrands";
import ChangePass from "../pages/settings/subSettings/changePass";
import StatusPage from "../pages/home/statusUpload/statusPage"
import PostAdPage from "../pages/postAds/postAd"
import ChatPage from "../pages/settings/subSettings/chatPage";
import FaqPage from "../pages/settings/subSettings/faqPage";
import WalletPage from "../pages/settings/subSettings/walletPage";
import AdvertPage from "../pages/settings/subSettings/advertPage";
import FollowersPage from "../pages/settings/subSettings/followersPage";
import PremiumServices from "../pages/home/premiumServices";

function InappPrivateRoute() {
  // const { isLoggedIn, user } = useSelector((state) => state.loginReducer);
  const isAuthed = true;
  return isAuthed ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

function SettingPrivateRoute() {
  // const { isLoggedIn, user } = useSelector((state) => state.loginReducer);
  const isAuthed = true;
  return isAuthed ? (
    <SettingLayout>
      <Outlet />
    </SettingLayout>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}



export default function Approute() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route element={<InappPrivateRoute />}>
          <Route path="/dashboard" element={<LandingPage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/lowest-prices" element={<LowestPrices/>} />
            <Route path="/highest-prices" element={<HighestPrices/>} />
            {/* <Route path="/product-details" element={<ProductDetails/>} /> */}
            {/* <Route path="/settings" element={<SettingProfile/>} /> */}
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Not-found"
            element={
              <div className="grid grid-cols-1 place-items-center text-base h-screen">
                <div>PAGE NOT FOUND.....</div>
              </div>
            }
          />
          <Route
            path="*"
          element={<Navigate to="/Not-found" replace={true} />}
          />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/email-activate" element={<EmailAct />} />
            <Route path="/email-confirm" element={<EmailConfirm />} />
            <Route path="/new-password" element={<NewPass />} />
            <Route path="/user-profile" element={<LoginDashboard/>} />
            <Route path="/status-page" element={<StatusPage/>} />
            <Route path="/post-ad" element={<PostAdPage/>} />
            <Route path="/gadget-page" element={<GadgetsScreen/>} />
            <Route path="/gadget-brands" element={<GadgetsBrands/>} />
            <Route path="/product-details" element={<ProductDetails/>} />
            <Route path="/wallet" element={<WalletPage/>} />
            <Route path="/change-password" element={<ChangePass/>} />
            <Route path="/premium-services" element={<PremiumServices/>} />
          
          </Route>
        
          <Route element={<SettingPrivateRoute />}>
            
          <Route path="/settings" element={<Settings/>} />
          <Route path="/chat-page" element={<ChatPage/>} />
          <Route path="/faq-page" element={<FaqPage/>} />
          <Route path="/advert-page" element={<AdvertPage/>} />
          <Route path="/followers-page" element={<FollowersPage/>} />
          </Route>

   
          </Routes> 
      </AnimatePresence>
    </div>
  );
}
