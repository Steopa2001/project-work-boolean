import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function Default_layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Default_layout;