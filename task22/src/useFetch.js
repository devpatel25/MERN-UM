import { useCallback, useState,useEffect } from "react";

const useFetch= (url) =>{
    const [data, setData] = useState(null);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);

    const fetchData = useCallback( async ()=>{
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Network issue! Please check your internet connection.");
            }
            const result = await response.json();
            setData(result);

        }catch(error){
            setError(error.message);
        }
        finally{
            setLoading(false);
        }
    },[url]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);

    return {data,loading,error};

};

export default useFetch;