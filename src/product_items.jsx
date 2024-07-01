import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./main.css";
import Lick from "./lick";
import { useSelector } from "react-redux";
import config from "./config";

export default function Marcetplace() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
//   const userData = useSelector((store) => {
//     return store.someReducer1.user;
//   });
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    //   Authorization: "Bearer " + (userData ? userData.data.token : ""),
    },
  };

  // ...

  useEffect(() => {
    axios
      .get(
        config.base_url + `products?page=${page}&per_page=16`,
        requestOptions
      )
      .then((response) => {
        setData(response.data);
        setSearchParams({ page: page });
      })
      .catch((error) => {
        // Обработайте ошибку здесь
        console.error(error);
      });
  }, [page, setSearchParams]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  // useEffect(() => {
  //   fetch(
  //     `https://marketplace.privateum.com/api/v1/products?page=${page}&per_page=16`
  //   ,requestOptions)
  //     .then((response) => response.json())
  //     .then((json) => setData({ ...json }));

  //   setSearchParams({ page: page });
  // }, [page, setSearchParams]);

  // const handlePageChange = (selectedPage) => {
  //   setPage(selectedPage.selected + 1);
  // };
  console.log(data);

  return (
    <>
      <div className="main">
        {data?.data?.items?.map((item) => (
          <Link to={`/MarcetplaceItem/${item.id}`} key={item.id}>
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
              pageRangeDisplayed={5} // Сколько страниц отображать вокруг текущей
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
