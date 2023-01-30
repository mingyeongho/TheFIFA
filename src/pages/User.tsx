import { Suspense } from "react";
import UserPage from "../components/UserPage/UserPage";

const User = () => {
  return (
    <Suspense fallback={<>...</>}>
      <UserPage />
    </Suspense>
  );
};

export default User;
