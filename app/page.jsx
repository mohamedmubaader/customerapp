"use client"
import { BiSolidUserPlus, BiCheck ,BiX } from "react-icons/bi";
import Table from "./components/Table"
import Form from './components/Form'
import { useSelector, useDispatch  } from 'react-redux'
import { toggleChangeAction, deleteAction } from "../redux/reducer";
import { deleteCustomer, getCustomers } from "./helpers/helper";
import { useQueryClient } from "@tanstack/react-query";
//import {DeleteComponent} from './components/DeleteComponent'

export default  function Home() {

  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteId = useSelector((state) => state.app.client.deleteId)
  const queryclient = useQueryClient();
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())
  }

  const deletehandler =  async () => {

    if(deleteId){    
      console.log(deleteId)
      await deleteCustomer(deleteId);
      await queryclient.prefetchQuery(['customers'], getCustomers)
      await dispatch(deleteAction(null))
    }
  }

  const canclehandler = async () => {
    await dispatch(deleteAction(null))
  }

  function DeleteComponent({ deletehandler, canclehandler }){
    return (
      <div className='flex gap-5'>
          <button>Are you sure?</button>
          <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
            Yes <span className='px-1'><BiX color='rgb(255 255 255)' size={25} /></span></button>
          <button onClick={canclehandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50'>
            No <span className='px-1'><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
      </div>
    )
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
        { deleteId ? DeleteComponent({ deletehandler, canclehandler }) : <></>}
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