import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Index = lazy(() => import("../pages/Index"));
const User = lazy(() => import("../pages/User"));

const Router = () => {
  return (
    <Suspense fallback={<main>...</main>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user/:nickname" element={<User />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
