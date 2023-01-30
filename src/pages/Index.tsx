import { Suspense } from "react";
import SearchPage from "../components/SearchPage/SearchPage";

const Index = () => {
  return (
    <Suspense fallback={<>...</>}>
      <SearchPage />
    </Suspense>
  );
};

export default Index;
