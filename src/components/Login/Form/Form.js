import React, { useState } from 'react'
import FormInput from './FormInput'
import TitleText from './TitleText'

export default function Form() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    fetch('https://cors-anywhere.herokuapp.com/http://localhost:8080/login',{
        method: 'POST',
        header:{
            username:username,
            password:password
        }
    }).then((data => {
        alert(data.json())
        console.log("worked")
    })).catch((error) => {console.log(error)})
  }
  return (
    <div className='flex flex-row justify-around bg-white m-auto p-10 shadow w-2/3 md:w-4/5 pr-4 pl-4 md:mx-1/6'>


    <div className='flex flex-col'>

        <TitleText name={'New Patient'} />
        <button className='hover:bg-green-700 '  style={{
            color: 'green',
            padding: 10,
            borderRadius: 25,
            width: 300,
            borderWidth: 2,
            borderColor: 'green',
            marginTop:10
        }}>Register Now</button>
    </div>


    <div>
        <TitleText name={'Returning Patient'} />

        <div className='justify-between'>
            <FormInput need={'email'} setValue={setUsername} />
            <FormInput need={'password'}  setValue={setPassword} />

            
            <button onClick={() => login()} style={{
            color: 'white',
            padding: 10,
            borderRadius: 25,
            width: 300,
            backgroundColor: 'green',
            marginTop:10
        }}>Login</button>

        </div>
    </div>
</div>
  )
}