import { createContext, useContext,useState } from "react";
import News from "../pages/News";
import api from "../config/axios";
const NewsContext=createContext()
const NewsContextProvider=({children})=>{
    const [news,setNews]=useState([])
    const [loading,setLoading]=useState(false)
    const fetchNews=async(url="/everything?q=india")=>{

        try{
            setLoading(true)
        const response = await api.get(
            `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
        )
        return response.data
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }

    }
    const value={
        news,
        setNews,
        fetchNews,
        loading
    }
    return(
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext=()=>{
    return useContext(NewsContext)
}

export {NewsContextProvider,useNewsContext}