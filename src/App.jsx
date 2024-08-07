import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./component/header";

import Home from "./Home";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import HelpCentr from "./HelpCentrs";
import Shop from "./component/Shop";
import Products from "./Products";
import MarcetplaceItem from "./product_item/product_item";
import Login from "./login";
import Test from "./component/Test";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="/help-center" element={<HelpCentr/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/product_item/:id" element={<MarcetplaceItem/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
