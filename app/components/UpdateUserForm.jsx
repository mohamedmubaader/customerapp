 "use client"
import { useReducer } from "react"
import { BiBrush, BiPlus } from "react-icons/bi";
import Success from './Success'
import Bug from "./Bug";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCustomer, getCustomers, updateCustomer } from "../helpers/helper";
import { useDispatch} from 'react-redux'
import { toggleChangeAction } from './../../redux/reducer'

export default function UpdateUserForm({formId,formData,setFormData}) {

    const queryClient = useQueryClient()
    const {isLoading,isError,data,error} = useQuery(['customers',formId],()=>getCustomer(formId))

    const UpdateMutation = useMutation((updated) => updateCustomer(formId,updated)
    ,{
          onSuccess: async (data) => { 
             await queryClient.prefetchQuery(['customers'],getCustomers) 
         }
    })

    if(isLoading) return <div>Loading ...</div>
    if(isError) return <div>Error</div>
    
    const {name, email, phone, location} = data 

    const handleSubmit = async (e) => {
        e.preventDefault();   
        console.log("Hello World ...")

        let updated = Object.assign({},data,formData)
   
         
        UpdateMutation.mutate(updated)
    }

    if (UpdateMutation.isLoading) return <div>Updating Records ...</div>
    if (UpdateMutation.isError)   return  <Bug message={addMutation.error.message}/>
    if (UpdateMutation.isSuccess)   return  <Success message={"Updated Successfully"}/>
    
   
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4 " onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={data.customer.name} name="name" placeholder="Name" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={data.customer.email} name="email" placeholder="Email" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={data.customer.phone} name="Phone" placeholder="Phone" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={data.customer.location} name="location" placeholder="Location" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} name="startdate" placeholder="Start Date" 
                className="border px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            {/* <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} name="status" value="Active" id="radioDefault1" 
                    className="form-check appearance-none rounded-full h-4 w-4 
                    border border-gray-300 bg-white checked:bg-green-500 
                    checked:border-green-500 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat 
                    bg-center bg-contain float-left mr-2 cursor-pointer " />
                    <label htmlFor="radioDefault1" className=" inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={setFormData} name="status" value="Inactive" id="radioDefault2" 
                    className="form-check appearance-none rounded-full h-4 w-4 
                    border border-gray-300 bg-white checked:bg-green-500 
                    checked:border-green-500 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat 
                    bg-center bg-contain float-left mr-2 cursor-pointer " />
                    <label htmlFor="radioDefault2" className=" inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div> */}
            <div>
                <button className="flex justify-center text-base w-2/6 bg-blue-500
                    text-white px-4 py-2 border rounded-md hover:bg-gray-50
                    hover:border-blue-500 hover:text-blue-500 ">
                    Update
                    <span className="px-1"><BiBrush size={24}/></span>
                </button>
            </div>
            
        </form>
    )
}