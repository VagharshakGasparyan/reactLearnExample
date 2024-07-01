import { useState, useEffect } from "react";
import { json } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import { type } from "@testing-library/user-event/dist/type";
import {store} from "./store";
import axios from "axios";
import config from "./config";
import { useNavigate } from "react-router-dom";
import {Checkbox} from "antd";
// import Aploade from "./upload";
import ('./Products.css')

export default function Login() {
  const dispatch = useDispatch();

  const userData = useSelector((store) => {
    return store.someReducer1.user;
  });



  const [data, setData] = useState(null);

  const requestData = {
    email: "application@privateum.com",
    password: "&Vz52G0zFDDc",
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer ' + "1|dWjF3ZEOIGmXBvfuGPnRDwWQkYyGo1uom0VbmKlE"//userData.data.token
    },
    body: JSON.stringify(requestData),
  };

  // ...

  const getUserData = () => {
    axios
      .post(config.base_url + "tmp-login", requestData, requestOptions)
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        if (json) {
          setData(json);
          dispatch({ type: "d_st/setUserData", payload: json });
        } else {
          throw new Error("Данные пользователя отсутствуют в ответе");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let deleteUser = () => {
    dispatch({ type: "d_st/deleteUserData", payload: null }); //gnum redux jnjuma tvyal@
  };

  const navigate = useNavigate();
  const hrefAploade = () => {
    navigate(-1);
  };

  const result = () => {
    if (!userData) {
      return (
        <div className="sign_input">
          <label for="email">Email:</label>
          <input type="email" value={"application@privateum.com"} />
          <label for="password">Password:</label>
          <input type="password" value={"&Vz52G0zFDDc"} />
            <label className="login_Check" >
                {/* <input type="checkbox" onChange={() => handleChange(el.id)}/> */}
                <Checkbox > </Checkbox>
                <h4>Save as</h4>
            </label>
          <button
            type="button"
            onClick={() => {
              getUserData();
              hrefAploade();
            }}
          >
            Sign in/Sign up
          </button>
        </div>
      );
    }

    return (
      <div className='logout'>
        <div> you are logged in</div>
        <button type="button" onClick={deleteUser}>
          Logout
        </button>
      </div>
    );
  };

  return <div className="login">{result()}</div>;
}
