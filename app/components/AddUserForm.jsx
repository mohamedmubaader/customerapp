
import { useReducer } from "react"
import { BiPlus } from "react-icons/bi";
import Success from './Success'
import Bug from "./Bug";
import { useQueryClient, useMutation  } from "@tanstack/react-query";
import { addCustomer, getCustomers } from "../helpers/helper";

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function AddUserForm({formData,setFormData}) {

    const addMutation = useMutation(addCustomer,{ onSuccess: async () => 
         {
            // The results of this query will be cached like a normal query
             await queryClient.prefetchQuery({queryKey: ['customers'],queryFn: getCustomers})
          }
    
    })
    const queryClient = useQueryClient()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(formData).length == 0) return console.log("NO Data avaliable ")
        let {name,email,phone,location} = formData
        const model = { name,phone,email,location }
        addMutation.mutate(model)
    }    
    
    if (addMutation.isLoading) return <div>Loading ...</div>
    if (addMutation.isError)   return  <Bug message={addMutation.error.message}/>
    if (addMutation.isSuccess)   return  <Success message={"Added Successfully"}/>
 

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4 " onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="name" placeholder="Name" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="email" placeholder="Email" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="phone" placeholder="Phone" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="location" placeholder="Location" 
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
            <button className=" flex justify-center text-base w-2/6 bg-green-500
                text-white px-4 py-2 border rounded-md hover:bg-gray-50
                hover:border-green-500 hover:text-green-500 ">
                Add
                <span className="px-1"><BiPlus size={24}/></span>
            </button>
            </div>
        </form>
    )
}