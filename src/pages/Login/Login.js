import React, { useState } from 'react'
import Form from '../../components/Login/Form/Form'
import FormInput from '../../components/Login/Form/FormInput'
import TitleText from '../../components/Login/Form/TitleText'
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [ message, setMessage ] = useState('')

    let navigate = useNavigate();

    const login = () => {
      
        if (username.length < 1 && password.length < 1 || username !='sheran_malik@hotmail.co.uk' && !password != 'malik')  {
            setMessage("Error has occured")
        } else{
            navigate('/dashboard')
        }  
       

    }
    return (
        <div style={{ backgroundColor: '#f6f6f6', width: '100%' }} className='m-auto'>
            <div className='p-10'>
                <TitleText name={'Login or Register'} />
            </div>
            <div className='flex flex-row justify-between bg-white w-3/4 m-auto p-10'>


                <div className='flex flex-col'>

                    <TitleText name={'New Patient'} />
                    <button style={{
                        color: 'green',
                        padding: 10,
                        borderRadius: 25,
                        width: 300,
                        borderWidth: 2,
                        borderColor: 'green',
                        marginTop: 10
                    }}>Register Now</button>
                </div>


                <div>
                <h1 className='text-center' style={{color:'red'}}> {message}</h1>
                    <TitleText name={'Returning Patient'} />

                    <div className='justify-between'>
                        <FormInput need={'email'} setValue={setUsername} />
                        <FormInput need={'password'} setValue={setPassword} />
                        <button
                            onClick={() => login()} style={{
                                color: 'white',
                                padding: 10,
                                borderRadius: 25,
                                width: 300,
                                borderWidth: 2,
                                backgroundColor: 'green',
                                marginTop: 10
                            }}>Log in</button>
                       


                    </div>
                    

                </div>
                
            </div>
           

        </div>
    )
}
