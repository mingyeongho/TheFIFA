import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Index = lazy(() => import("../pages/Index"));
const User = lazy(() => import("../pages/User"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/user/:nickname" element={<User />} />
    </Routes>
  );
};

export default Router;
