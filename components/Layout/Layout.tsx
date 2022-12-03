import { LayoutProps } from "../../utils/types/interface";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadInfo from "../HeadInfo/HeadInfo";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadInfo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
