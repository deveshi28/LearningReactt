import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [Data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=>{
            console.log(res);
            setData(res[currency])
        })

        
    },[currency]);
    return Data;
}

export default useCurrencyInfo;