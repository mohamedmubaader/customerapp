//"use client"
//import Image from "next/image"
import axios from "axios";
import { BiEdit,BiTrashAlt } from "react-icons/bi";
import { useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch} from 'react-redux'
//import data from './../database/data.json'
import { toggleChangeAction, updateAction } from './../../redux/reducer'
import {getCustomers} from './../helpers/helper'

export default function Table () {

const { isLoading, isError, data, error } = useQuery(['users'], getCustomers)

if(isLoading) return <div>Employee is Loading...</div>;
if(isError) return <div>Got Error {error}</div>

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-14 py-2"> 
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-14 py-2"> 
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-14 py-2"> 
                        <span className="text-gray-200">Phone</span>
                    </th>
                    <th className="px-14 py-2"> 
                        <span className="text-gray-200">Location</span>
                    </th>
                    {/* <th className="px-14 py-2"> 
                        <span className="text-gray-200">Start Date</span>
                    </th>    */}
                    <th className="px-14 py-2"> 
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>         
            <tbody className="bg-gray-200">
               {
                data.customers?.map((obj,i) => <Tr {...obj} key={i}/> )
               }
            </tbody>

        </table>
    )
}

function Tr({_id,name,phone,email,location}) {
   
    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onUpdate = () => { console.log(_id)
        dispatch(toggleChangeAction())
        if (visible)  {
            dispatch(updateAction(_id))
        }
    }
    return (
        <tr className="bg-gray-50 text-center">
            <th className="px-16 py-2 flex flex-row items-center">
                {/* <img src= {avatar || "#"} alt="" /> */}
                <span className="text-centr ml-2 font-semibold">{name || "unKnow"}</span>

            </th>
            <th className="px-14 py-2">
                <span>{email || "unKnown"}</span>
            </th>
            <th className="px-14 py-2">
                <span>{phone || "unKnown"}</span>
            </th>
            <th className="px-14 py-2">
                <span>{location || "unKnown"}</span>
            </th>
            {/* <th className="px-14 py-2">
                <span>{startdate || "unKnown"}</span>
            </th> */}
            {/* <th className="px-14 py-2">
            <button className="cursor">
                <span className={`${status == "Active" ? 'bg-green-500' : 'bg-rose-500'}
                 text-white px-5 py-1 rounded-full`}>
                    {status || "Unknown"}
                </span>
            </button>
            </th> */}
            <th className="px-16 py-2 flex justify-around gap-5">
                <button onClick={onUpdate} className=" cursor-pointer">
                    <BiEdit size={25} color={"rgb(34,197,94"}></BiEdit>
                </button>
                <button className=" cursor-pointer">
                    <BiTrashAlt size={25} color={"rgb(244,63,94"}></BiTrashAlt>
                </button>
            </th>
        </tr>
    )
}