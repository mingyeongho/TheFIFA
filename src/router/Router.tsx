import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import User from "../pages/User";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/user/:nickname" element={<User />} />
    </Routes>
  );
};

export default Router;
