import {AudioOutlined} from "@ant-design/icons";
import {Input, Space} from "antd";
import {Checkbox} from "antd";
import {useState, useEffect} from "react";
import config from "../config";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import("./slider.css");
const {Search} = Input;

export default function Brand() {
    const [brands, setBrands] = useState(null);
    let [checked, setChecked] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();


    const requestOptions = {
        headers: {
            Accept: "application/json",
        },
    };


    useEffect(() => {

         //setChecked({...checked});
        window.timerNumber=0;
        axios
            .get(config.base_url + `brands`, requestOptions)
            .then((response) => {
                setBrands(response.data);

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




    const onChange = (e, id) => {
        let newValue = []
        if(e.target.checked){
             newValue = [...checked,id]
        }else{
            setSearchParams((prevState)=>{
                prevState.delete('br['+id+']');
                prevState.set('page',1)
            })
            newValue = checked.filter(e=>e!==id)
        }

        setChecked(newValue)
        setSearchParams((prevState)=>{
            newValue.forEach(u=>{
                prevState.set('br['+u+']',u)
            })
            prevState.set('page',1)

            return prevState
        })
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
            <div className="brand_scroll">
                {brands?.data?.items?.map(el => <label className="brands" key={el.id}>
                    <Checkbox onChange={(e) => {
                        onChange(e, el.id);
                    }} checked={checked.includes(el.id)}> </Checkbox>
                    <h4>{el.name}</h4>
                </label>)}
            </div>
        </>
    );
}
//
//
// import { AudioOutlined } from "@ant-design/icons";
// import { Input, Space } from "antd";
// import { Checkbox } from "antd";
// import { useState, useEffect } from "react";
// import config from "../config";
// import axios from "axios";
// import("./slider.css");
// const { Search } = Input;
//
// export default function Country({ onChangeCountry }) {
//     const [country, setCountry] = useState(null);
//     const [checked, setChecked] = useState({});
//
//     const requestOptions = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     useEffect(() => {
//         axios
//             .get(config.base_url + 'brands', requestOptions)
//             .then((response) => {
//                 setCountry(response.data);
//             })
//             .catch((error) => {
//                 // Обработайте ошибку здесь
//                 console.error(error);
//             });
//     }, []);
//
//     const suffix = (
//         <AudioOutlined
//             style={{
//                 fontSize: 16,
//                 color: "#1677ff",
//             }}
//         />
//     );
//
//     const onChange = (e, id) => {
//         let ch = e.target.checked;
//         if (ch) {
//             checked[id] = id;
//
//
//         } else {
//             delete checked[id];
//
//         }
//         setChecked({ ...checked });
//         let i = 0;
//         let sp = {};
//         for (let item in checked) {
//             sp["co[" + i + "]"] = item;
//             i++;
//         }
//
//         //setSearchParams({...searchParams});
//         onChangeCountry(sp);
//         console.log(id);
//         console.log(checked);
//     };
//     const handleReset = () => {
//         setChecked({});
//         onChangeCountry({});
//         // Очищаем список выбранных птичек
//     };
//     const onSearch = (value, _e, info) => console.log(info?.source, value);
//     return (
//         <>
//             <div>
//                 <Space direction="vertical">
//                     <Search
//                         placeholder="input search text"
//                         allowClear
//                         onSearch={onSearch}
//                         style={{
//                             width: 200,
//                         }}
//                     />
//                 </Space>
//             </div>
//             <div className="country_scroll">
//                 {country?.data?.items?.map((el) => (
//                     <label className="brands" key={el.id}>
//                         {/* <input type="checkbox" onChange={() => handleChange(el.id)}/> */}
//                         <Checkbox
//                             onChange={(e) => {
//                                 onChange(e, el.id);
//                             }}
//                             checked={checked[el.id]} // Устанавливаем состояние флажка на основе checked[id]
//                         >
//                             {" "}
//                         </Checkbox>
//                         <h4>{el.name}</h4>
//                     </label>
//                 ))}
//             </div>
//             <button onClick={handleReset}>Сбросить</button>
//         </>
//     );
// }