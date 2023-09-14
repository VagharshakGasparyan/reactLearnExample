import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
const { Search } = Input;

export default function Country(){

    const [country, setCountry] = useState(null);
    const[checked,setChecked]=useState({})
    const requestOptions = {
      headers: {
        Accept: "application/json",
      },
    };
    useEffect(() => {
      axios
        .get(config.base_url + `countries?per_page=50`, requestOptions)
        .then((response) => {
          setCountry(response.data);
          console.log(country);
        })
        .catch((error) => {
          // Обработайте ошибку здесь
          console.error(error);
        });
    }, []);
    
   
  
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
   
    const onChange = (e,id) => {
      let ch=e.target.checked;
      checked[id]=ch;
       setChecked({...checked});
      // if(ch){
      //   checked.push(id);
      // }else{
      //   let i=checked.indexOf(id);
      //   checked.splice(i,1);
      // }
      // setChecked([...checked]);
      // console.log(`checked = ${e.target.checked}`);
    
      console.log(id);
      console.log(checked);
    };
  
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
      
      <>
          
     
        <div>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space>
        </div>
        <div className="country_scroll">
        {country?.data?.items?.map(el => <div className="brands" key={el.id}>
          {/* <input type="checkbox" onChange={() => handleChange(el.id)}/> */}
          <Checkbox onChange={(e)=>{onChange(e,el.id)}}> </Checkbox>
        <h4>{el.name}</h4>
        
        </div>)}
        </div> 
  </>
    
    );
}
