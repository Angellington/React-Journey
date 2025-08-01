import { useState, useEffect } from 'react'

const [getData, setGetData] = useState({})

const data = {
    name: ["Minerva"],
    age: ["19 Years"],
    address: ['Angel World']
}

useEffect(() => {
    if(data){
        for (const input in data){
            if (Error.hasOwnProperty(input)){
                setGetData({...getData, [input]: data[input][0]})
            }
        }
    }
}, [data])
const Data = () => {
  return (
    <div>Data</div>
  )
}

export default Data