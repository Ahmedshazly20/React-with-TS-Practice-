import { Route, createBrowserRouter, createRoutesFromElements,Navigate } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ContributePage from "../pages/Contribute";
import RootLayout from "../pages/Layout";
import LoginPage from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import QuickStartPage from "../pages/learn";
import InstallationPage from "../pages/learn/Installation";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReactPage from "../pages/learn/ThinkingInReact";
import React from "react";
import Homepage from "../pages/mypages/homepage";
import Filter from './../pages/About';

// THis is my code 


const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* {login   contribute} */}
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="Filter" element={<Filter />} />

       <Route path="contribute" element={
       <ProtectedRoute isAllowed={isLoggedIn} redirected={"/login"} > 
           <ContributePage/>
       </ProtectedRoute>}/>

       <Route path="login" element={
       <ProtectedRoute isAllowed={!isLoggedIn} redirected={"/contribute"} > 
           <LoginPage/>
       </ProtectedRoute>}/>
       
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />

      
    </>
  )
);

export default router;
