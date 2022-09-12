import React, { useState, useEffect} from 'react'
import DashButtons from '../../components/Dashboard/DashButtons'
import DashTitle from '../../components/Dashboard/DashTitle'
import Footer from '../../components/Footer'
import Form from '../../components/Login/Form/Form'
import FormInput from '../../components/Login/Form/FormInput'
import TitleText from '../../components/Login/Form/TitleText'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [fullName, setFullName ] = useState("")

    const navigate = useNavigate();
    useEffect(() => {
      
    setFullName("Sheran Malik")
      return () => {
      }
    }, [])

    const logout =()=> {
        navigate('/login')
    }
    

    return (
        <div >
            <div className='bg-gray-500 rounded-sm h-full p-10'>
               <DashTitle title={fullName}/>

                <div className='flex flex-col justify-center'>
                    <DashButtons title="My Appointments"/>
                    <DashButtons title="My Prescriptions"/>
                    <DashButtons title=" Medical History"/>
            
        
                    <button onClick={() => logout()}
                    className='rounded-xl border w-52 p-4 text-xl bg-red-400 text-white text-center self-center mb-5'>
                        Log Out
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
