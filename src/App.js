import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Addreward from "./pages/Addreward";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/line-awesome.min.css";
import "./assets/css/style.css";
// import PageNotFound from "./pages/PageNotFound";


import { ClearBrowserCache } from "react-clear-browser-cache";
// import LoginPageNotFound from "./pages/LoginPageNotFound";

function App() {
  return (
    <>
      <PageLayout>
        <BrowserRouter>
          <AuthenticatedTemplate>
            <ClearBrowserCache>{(contextValue) => null}</ClearBrowserCache>;
            <Navbar />
            <Routes>
              <Route exact path="/home" element={<Dashboard />} />
              <Route path="/reward" element={<Addreward />} />
              
              <Route path="/syncuser" element={<Employees />} />
              
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <Routes>
              {/* <Route path="*" element={<LoginPageNotFound />} /> */}
              <Route exact path="/" element={<Login />} />
            </Routes>
          </UnauthenticatedTemplate>
        </BrowserRouter>
      </PageLayout>
    </>
  );
}
export default App;
