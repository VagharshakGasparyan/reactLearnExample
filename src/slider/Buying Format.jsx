import {Radio} from "antd";
import {AudioOutlined} from "@ant-design/icons";
import {Input, Space} from "antd";
import {Checkbox} from "antd";
import {useState, useEffect} from "react";
import config from "../config";
import axios from "axios";

import("./slider.css");
const {Search} = Input;

export default function Buying() {
    const [brands, setBrands] = useState(null);
    const [checked, setChecked] = useState({});
    const requestOptions = {
        headers: {
            Accept: "application/json",
        },
    };


    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: "#1677ff",
            }}
        />
    );
    // const handleChange = (id) => {
    //   if (checked.includes(id)) {

    //     setChecked(checked.filter(item => item !== id));
    //   } else {

    //     setChecked([...checked, id]);
    //   }
    // };

    const onChange = (e) => {
        let ch = e.target.checked;

        setChecked({...checked});
        // if(ch){
        //   checked.push(id);
        // }else{
        //   let i=checked.indexOf(id);
        //   checked.splice(i,1);
        // }
        // setChecked([...checked]);
        // console.log(`checked = ${e.target.checked}`);


        console.log(checked);
    };

    return (
        <>
        <div className='Buying_Format'>
          <label className="buying" >
            <Checkbox onChange={(e)=>{onChange(e)}}> </Checkbox>
            <h4>All Listing</h4>
</label>
          <label className="buying" >
            <Checkbox onChange={(e)=>{onChange(e)}}> </Checkbox>
            <h4>Buy it Now</h4>
          </label>

          <label className="buying" >
            <Checkbox onChange={(e)=>{onChange(e)}}> </Checkbox>
            <h4>Auction</h4>
          </label>


        </div>


</>


)
}
