import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import User from "../pages/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user/:nickname" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
