import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Lick from "./lick";
import { Spin } from 'antd';

import config from '../config';
import MarcetplaceItem from "./product_item";

export default function Marcetplace({brands, countries,reset}) {

  const [data, setData] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  const[loading,setLoading]=useState(false)
    //console.log(searchParams.toString())

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    //   Authorization: "Bearer " + (userData ? userData.data.token : ""),
    },
  };

  // ...

  useEffect(() => {

      setLoading(true);

      axios
      .get(
        config.base_url + `products?per_page=12&${searchParams.toString()}`,
        requestOptions
      )
      .then((response) => {


        setData(response.data);
          setLoading(false);
          // page={};
      })
      .catch((error) => {
        // Обработайте ошибку здесь
        console.error(error);
      });
  }, [brands,countries, searchParams]);

  const handlePageChange = (selectedPage) => {
      setSearchParams((prevParams)=>{
          prevParams.set('page',selectedPage.selected+1)
          return prevParams
      })

  };




  const page = searchParams.get('page')
  return (
    <>
      <div className="main">
        { loading ? <Spin /> : data?.data?.items?.map((item) => (
          <Link to={`/product_item/${item.id}`} key={item.id}>
            <div className="item">
              <div className="img">
                <span>
                  <Lick product={item} />
                </span>
                <img src={item.image_url} alt="" />
              </div>
              <div className="item_items">
                <h3>shop: {item.shop.name}</h3>
                <h5>{item?.brand?.name}</h5>
                {item.name}
                <h1>
                  {item.showed_currency.code} {item.sale_price}
                </h1>
              </div>
            </div>
          </Link>
        ))}

        <div className="paginate">
          {data?.data?.last_page > 1 && (
            <ReactPaginate
              pageCount={data.data.last_page}
              pageRangeDisplayed={3} // Сколько страниц отображать вокруг текущей
              marginPagesDisplayed={5} // Сколько страниц отображать в начале и конце списка
              onPageChange={handlePageChange}
              forcePage={page - 1}
              previousLabel={"Previous"} // Текст для кнопки "Предыдущая"
              nextLabel={"Next"} // Текст для кнопки "Следующая"
              pageClassName={"pagination-item"} // Класс для элементов страниц
              previousClassName={"pagination-previous"} // Класс для кнопки "Предыдущая"
              nextClassName={"pagination-next"} // Класс для кнопки "Следующая"
            />
          )}
        </div>
      </div>
    </>
  );
}
