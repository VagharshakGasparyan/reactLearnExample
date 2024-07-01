import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
export default  function Btnreset(){
    const locationSearch = new URLSearchParams(window.location.search);
    const mu = {};
    locationSearch.forEach((item, i)=>{
        //console.log(item, i);
        mu[i] = item;
    });


    const [searchParams, setSearchParams] = useSearchParams();
    let [checked, setChecked] = useState([])
    let resetBtn=(ev)=>{
        let reset = {};
        if(mu.hasOwnProperty('per_page')){
            reset.per_page = mu.per_page;
        }//mu={page:null}
        if(mu.hasOwnProperty('page')){
            reset.page = mu.page;
        }
        setSearchParams(reset);

    }
    //console.log(searchParams)


    return(
        <div>
            <input className="btnreset" type="button" value="Reset" onClick={resetBtn}/>
        </div>

    )
}