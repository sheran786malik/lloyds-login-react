import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Form from '../../components/Login/Form/Form'
import FormInput from '../../components/Login/Form/FormInput'
import TitleText from '../../components/Login/Form/TitleText'

export default function Home(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(username)
    return (
        <div style={{ backgroundColor: '#f6f6f6'}} className='m-auto sm'>
            <div className='p-10'>
                <TitleText name={'Login or Register'}/>
            </div>
            <Form/>
            <Footer/>
        </div>
    )
}
