import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import ('./slider.css')
const { Search } = Input;

export default function Country() {
    let [tf, setTf] = useState(true);
    const [country, setCountry] = useState(null);
    let [countriesToShow, setCountriesToShow] = useState([]);
    let [checked, setChecked] = useState([])
    let [valueS, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const requestOptions = {
        headers: {
            Accept: "application/json",
        },
    };

    //console.log('def-checked=', checked);

    checked = [];
    searchParams.forEach((val, key)=>{
        if(key.startsWith('co[')){
            checked.push(val);
        }
    });
    useEffect(() => {
        // searchParams.forEach((val, key)=>{
        //     if(key.startsWith('co[')){
        //         checked.push(val);
        //     }
        // });
        // setChecked([...checked]);
        //console.log('useEffect-checked=', checked);

        axios
            .get(config.base_url + `countries?per_page=50`, requestOptions)
            .then((response) => {
                countriesToShow = response.data.data.items;
                // console.log('countriesToShow=', countriesToShow);
                setCountriesToShow([...countriesToShow]);
                setCountry(response.data);
            })
            .catch((error) => {
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
    //console.log(country)
    const onChange = (e, id) => {
        let idStr = id.toString();
        if (e.target.checked) {
            if(!checked.includes(idStr)){
                checked.push(id.toString());
            }
        }else{
            let i = checked.indexOf(idStr);
            if(i > -1){
                checked.splice(i, 1);
            }
        }
        let newSearchParams = {};
        searchParams.forEach((val, key)=>{
            if(!key.startsWith('co[')){
                newSearchParams[key] = val;
            }
        });
        checked.forEach((ch)=>{
            newSearchParams['co[' + ch + ']'] = ch;
        });
        setSearchParams(newSearchParams);

    };

    const onSearch = (value, e, info) => {
        // console.log('onSearch=', value);
        // console.log('e=', e);
        // console.log('info=', info);
        // console.log('country=', country);
        let countries = country.data.items;
        let countriesToShow = [];
        if(info === 'clear'){
            setCountriesToShow([...country.data.items]);

        }else {
            countries.forEach((countryItem, index)=>{
                if(countryItem.name.toLowerCase().includes(value.toLowerCase())){
                    countriesToShow.push(countryItem);
                }else{
                    if(checked.includes(countryItem.id.toString())){
                        checked.splice(checked.indexOf(countryItem.id.toString()), 1);
                    }
                }
            });
        }
        console.log(checked);
        let newSearchParams = {};
        checked.forEach((ch)=>{
            newSearchParams['co[' + ch + ']'] = ch;
        });
        setSearchParams(newSearchParams);
        setCountriesToShow(countriesToShow);
    };



    return (
        <>
            <div>
                <Space direction="vertical">
                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        //onClear={onClearSearch} // Добавляем обработчик для очистки поиска
                        style={{
                            width: 200,
                        }}
                    />
                </Space>
            </div>
            <div className="country_scroll">
                {countriesToShow.map(el => <label className="brands" key={el.id}>
                    <Checkbox onChange={(e) => {
                        onChange(e, el.id)
                    }} checked={checked.includes(el.id.toString())}> </Checkbox>
                    <h4>{el.name}</h4>
                </label>)}
            </div>
        </>
    );
}
