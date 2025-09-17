import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
      fetch(`https://v6.exchangerate-api.com/v6/9cf4dae8e597f99cd864e797/latest/${currency}`)
      .then((res)=> res.json())
      .then((res) => setData(res.conversion_rates))
      
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo