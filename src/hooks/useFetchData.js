import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = ({endPoint}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    /*
    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const data = await response.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    */

    const getData = async () => {
        const {data, isLoading} = await fetchData(endPoint);
        setData(data);
        setIsLoading(isLoading);
    }

    useEffect(() => { 
        getData()
        /*
        fetchData(endPoint)
        .then(res => {
            setData(res.data),
            setIsLoading(res.isLoading)
            }) 
            */
        }, [endPoint])

    return {
        data,
        isLoading
    }
}