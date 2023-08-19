import Image from "next/image"
import { BiEdit,BiTrashAlt } from "react-icons/bi";

export default function Table() {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Phone</span>
                    </th>
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2"> 
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr className="bg-gray-50 text-center">
                    <th className="px-16 py-2 flex flex-row items-center">
                        {/* <Image src="/aaa.jpg" width={20} height={20} alt="customer photo" priority />
                        <span className="text-centr ml-2 font-semibold">FirstCustomer</span> */}
                        <p>photo</p>
                    </th>
                    <th className="px-16 py-2">
                        <span>FirstCustomer@gamil.com</span>
                    </th>
                    <th className="px-16 py-2">
                        <span>KD 2000</span>
                    </th>
                    <th className="px-16 py-2">
                        <span>10-05-2023</span>
                    </th>
                    <th className="px-16 py-2">
                        <button className=" cursor-pointer">
                            <span className="bg-green-500 text-white px-5 py-1 rounded-full" >Active</span>
                        </button>
                    </th>
                    <th className="px-16 py-2 flex justify-around gap-5">
                        <button className=" cursor-pointer">
                            <BiEdit size={25} color={"rgb(34,197,94"}></BiEdit>
                        </button>
                        <button className=" cursor-pointer">
                            <BiTrashAlt size={25} color={"rgb(244,63,94"}></BiTrashAlt>
                        </button>
                    </th>
                </tr>
            </tbody>

        </table>
    )
}