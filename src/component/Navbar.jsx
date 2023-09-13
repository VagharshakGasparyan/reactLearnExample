import React from "react";

import "./Navbar.css";
import { Input, Space,  Col, Row,Typography} from "antd";
import NavbarMenu from "./NavbarMenu";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
export default function Navbar() {
  return (
    <div>
      <div className="headerTop">
        <div>
          <img src={require(`../img/logo1.png`)} />
          <h2>
            {" "}
            Support <a href="+47 111 111 111">+1 111 111 11</a>{" "}
          </h2>
        </div>

        <div>
          <img src={require(`../img/location.png`)} />
          <h2>order tracking</h2>
        </div>
        <div>
          <img src={require(`../img/usa.png`)} />
          <h2>English/$</h2>
        </div>
      </div>
      {/* header-main block */}
      <div className="headerMain">
        <div>
        <img src={require(`../img/Marcetplace.png`)} style={{height:'32px'}} />
        </div>
        <Search
          placeholder="search from products"
          onSearch={onSearch}
          enterButton
          style={{
            width: 320,
            flex:1
          }}
        />
       <div className="headerMain_sign">
           {/* login */}
           login or user
       </div>
      </div>
     <div className="headerMenu">
        <NavbarMenu/>
     </div>

      
    </div>
  );
}
