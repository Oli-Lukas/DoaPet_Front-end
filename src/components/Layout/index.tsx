import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import Footer from "../Footer";
import "./style.scss";

function Layout()
{
  return (
    <div className="layout">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;