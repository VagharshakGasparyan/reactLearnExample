import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import {Input, Space, Col, Row, Typography} from "antd";
import NavbarMenu from "./NavbarMenu";
import Login from "../login";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Headerfooter from "./headerfooter";

const {Search} = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
export default function Navbar() {
    const navigate = useNavigate();
    const goSign = () => {
      return   navigate('/login');
    }

    return (
        <div>
            <div className="headerTop">
                <div>
                    <img src={require(`../img/logo1.png`)}/>
                    <h2>
                        {" "}
                        Support <a href="+47 111 111 111">+1 111 111 11</a>{" "}
                    </h2>
                </div>

                <div>
                    <img src={require(`../img/location.png`)}/>
                    <h2>order tracking</h2>
                </div>
                <div>
                    <img src={require(`../img/usa.png`)}/>
                    <h2>English/$</h2>
                </div>
            </div>
            {/* header-main block */}
            <div className="headerMain">
                <div>
                    <img src={require(`../img/Marcetplace.png`)} style={{height: '32px'}}/>
                </div>
                <Search
                    placeholder="search from products"
                    onSearch={onSearch}
                    enterButton
                    style={{
                        width: 320,
                        flex: 1
                    }}
                />
                <div className="headerMain_sign" onClick={goSign}>
                    <FontAwesomeIcon icon={faUser}/>
                    <div className='user_text'>
                        <h5>Hello, Sign in</h5>
                        <h5>My Account</h5>
                    </div>
                </div>

            </div>
            <div className="headerMenu">
                <NavbarMenu/>
            </div>
            <br/>
               <div className='content-style'>
                   <Headerfooter/>
               </div>

        </div>
    );
}
