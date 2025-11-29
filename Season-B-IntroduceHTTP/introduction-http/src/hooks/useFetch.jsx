import { useState, useEffect } from "react";

// 4 - Custom Hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - Refatorando o POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [id, setId] = useState(null)


  // 6 - Loading
  const [loading, setLoading] = useState(false);

  // 7 - Error
  const [error, setError] = useState(null);

  function httpConfig(data, method){
    if(method === "POST"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setMethod(method)
      setCallFetch(prev => !prev)
    }

    if(method === "DELETE"){
      console.log('data', data)
      setId(data.id)
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
      })
      setMethod(method)
      setId(id)
      setCallFetch(prev => !prev)
    }
  }

  useEffect(() => {
   const fetchData = async () => {
      setLoading(true)
      try{
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      } catch (e) {
        setError("Houve um erro ao carregar os dados")
      }

      setLoading(false)
   }
   fetchData()
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let fetchOptions;
      if(method === "POST"){  
        const res = await fetch(...fetchOptions)
        const json = await res.json();
  
      }
      if(method === "DELETE"){
        fetchOptions = [`${url + "/" + id}`, config]
        const res = await fetch(...fetchOptions);
      }
      
      setCallFetch(prev => !prev)
    }

    httpRequest();
  }, [config, method, url])

  return { data, httpConfig, loading, error};
};
