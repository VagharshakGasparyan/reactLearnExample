import { Layout, Space } from "antd";
// import Buying_Format from "./slider/Buying_Format";

import Country from "./slider/country";
import axios from "axios";
import Brand from "./slider/Brand";
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
              {/* <Buying_Format /> */}
            </div>
            <hr />

            <div className="brand">
              <h3>Brand</h3>
              <br />
             
        <Brand/>
             
            </div>
            <hr />
            <div className="country">
            <h3>country</h3>
             <br />
             <Country/>

            </div>
            <hr />
          </div>
        </Sider>

        <Layout>
          <Content className="content_style">Content</Content>
        </Layout>
      </Layout>
    </Space>
  );
}

