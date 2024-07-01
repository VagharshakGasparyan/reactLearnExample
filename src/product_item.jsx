import { useState,useEffect } from "react";
// import Marcetplace from "./Marcetplace";
import { useParams,Link } from "react-router-dom";
import axios from 'axios';
import config from './config'; 
export default function MarcetplaceItem(){
    const[data,setData]=useState(null);
  
    const{id}=useParams();
    useEffect(() => {
        axios.get(
          config.base_url+`products/${id}`
        )
          .then((response) => {

            setData(response.data)
          })
          
          .catch((error) => {
            // Обработайте ошибку здесь
            console.error(error);
          });
    
      
      }, []);
      console.log(data);
      const ret=()=>{
       
        if(data){

            return (
              <div>
                <div className="item_name">
                <h1>{data.data.name}</h1>
                </div>
                <div className="marcet_item"> 
            
         <div className="img_smoll">
         <img src={data.data.image_url} alt="" />
         <img src={data.data.image_url} alt="" />
         </div>
         <div className="img_big">
         <img src={data.data.image_url} alt="" />
         </div>
       </div>
   </div>
            );
        }
     
        return "Loader"
      }
    return(
       <div className="product_item">
    
       {
             
        ret()
       } 
       
        </div>  
    )
}