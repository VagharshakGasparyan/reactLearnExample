import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import config from '../config'; 




export default function Lick({product}){

    const userData=useSelector((store)=>{
        return store.someReducer1.user;
       })
    const[favorite,setFavorite]=useState(product.is_favorite);

      
      
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + (userData ? userData.data.token : '')
        },
       
      }
   const lickBtn=(ev)=>{
    ev.preventDefault() 
    
    if(!userData){
        return;
    }
    axios.get(config.base_url+'products/toggle-wishlist/'+product.id, requestOptions)
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error('Ошибка сети');
      // }
      // return response.json();
      setFavorite(response.data)
      // setFavorite(data.is_favorite)
    })
    // .then((json) => {
     
    //     // setFavorite(json.data.is_favorite); // Обновите состояние компонента данными из ответа
    
    // })
   
    .catch((error) => {
      // Обработайте ошибку здесь
      console.error(error);
    });
      
    

   }
    return(

        <button style={{backgroundColor: favorite?'red':'white',width:'35px',height:'40px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}  type='button'  onClick={lickBtn}>
            <FontAwesomeIcon icon={faHeart} style={{color: "#000000",fontSize:'20px'}} />
      </button>
    )
}