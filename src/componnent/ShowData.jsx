import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ShowData = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
      fetchedData()
    
      
    }, [])
    

    const fetchedData = async () => {
        const gettedData = await axios.get('/form/get')
        console.log(gettedData.data.data);
        setdata(gettedData.data.data)
        
    }
  return (
    <div>
        {data.map((obj)=>{
            return (<div>{obj.name}</div>)
        })}
    </div>
  )
}
