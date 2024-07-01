import { Layout, Space } from "antd";


import Country from "./slider/country";
import axios from "axios";
import Brand from "./slider/Brand";
import Marcetplace from "./product_item/product_items";
import {useState} from "react";
import Buying from "./slider/Buying Format";
import Btnreset from "./slider/btnrestart";
import("./Products.css");
export default function Products() {
  const { Header, Footer, Sider, Content } = Layout;






  return (
    <Space direction="vertical" className="vertical">
      <Layout>
        <Sider className="slider_style">
          <div className="slider_block">
            <div className="Buying_Format">
              <h3>Buying Format</h3>
              <br />
             <Buying/>
            </div>
            <hr />

            <div className="brand">
              <h3>Brand</h3>
              <br />
             
        <Brand />
             
            </div>
            <hr />
            <div className="country">
            <h3>country</h3>
             <br />
             <Country

             />

            </div>
            <hr />
              <br/>
              <div className='reset'>
             <Btnreset/>
              </div>
          </div>
        </Sider>

        <Layout>
          <Content className="content_style">
              <div className="product_items">
               <Marcetplace  />
              </div>

          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}

