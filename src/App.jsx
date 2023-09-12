import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./component/header";



export default function App(){

return(
  <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/">
    
        </Route>
      </Routes>
    </BrowserRouter>
)
}
