import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const PrimeForm = () => {

    const {register,handleSubmit} = useForm()
    const submitHandler = async (data) => {
        console.log(data);
        const response = await axios.post("/form/add",data)
        console.log(response);
        
    }
  return (
    <div>
        <form  onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" {...register("name")}  />
            </div>
            <div>
                <label htmlFor="">Number:</label>
                <input type="tel" {...register("number")} />
            </div>
            <div>
                <label htmlFor="">Age:</label>
                <input type="number" {...register("age")}  />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
