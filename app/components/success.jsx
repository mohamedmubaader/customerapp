import { BiPlus } from "react-icons/bi";
import { useDispatch} from 'react-redux'
//import data from './../database/data.json'
import { toggleChangeAction } from './../../redux/reducer'
import { resolve } from "styled-jsx/css";




export default function Success({message}) {
    const dispatch = useDispatch()
    const showMessage = async () => {
        await new Promise((resolve) => setTimeout(resolve,3000))
        dispatch(toggleChangeAction())
    }    
    
    showMessage()

    return (
        <div className="success container mx-auto">
             <div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                {message}
                 <BiPlus size={24} color={"rgb(34,197,94)"}/>        
             </div>
        </div>
    )
}