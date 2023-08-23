"use client"
import { BiSolidUserPlus } from "react-icons/bi";
import Table from "./components/Table"
import Form from './components/Form'
//import {useState} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { toggleChangeAction } from "../redux/reducer";

export default  function Home() {

  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())  
  }

  return (
    <main className='py-5'>
      <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Customers Managment</h1>  
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className='flex gap-3'>
          <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:border-indigo-500 hover:text-gray-800 '>
            Add Customer
            <span className='px-1'><BiSolidUserPlus size={23} /></span>  
          </button>
        </div>
      </div>
      {/* Form */}
   
      { visible?  <Form/> : <></>}
  
      {/* table */}
      <div className="container mx-auto">
      <Table/> 
      </div>
    </main>
  )
}