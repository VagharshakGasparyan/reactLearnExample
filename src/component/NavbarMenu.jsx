import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

import Shop from "./Shop";




export default function NavbarMenu() {
  //     let userData=useSelector((state)=>{
  //         return state.someReducer1.user;
  // })
  return (
    <>
      <nav className="navbar">
      <NavLink to="/Categories" className={"Categories"}>
      Categories
        </NavLink>
        <NavLink to="/" className={"navlink"}>
          Home
        </NavLink>
        <NavLink to="/Navdrop" className={"navlink"}>{<Shop/>}</NavLink>
        <NavLink to="/AboutUs" className={"navlink"}>
          AboutUs
        </NavLink>
        <NavLink to="/Contacts " className={"navlink"}>
          Contacts{" "}
        </NavLink>
        <NavLink to="/HelpCentr " className={"navlink"}>
          HelpCentr{" "}
        </NavLink>
        {/* <NavLink to="/Login " className={'sign'}>{userData ? userData.data.user.name:'Login'} </NavLink> */}
      </nav>
      <Outlet />
    </>
  );
}
