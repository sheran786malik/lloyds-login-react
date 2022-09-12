import React from 'react'

export default function FormInput({need, setValue, type}) {



        return (
            <div className='pr-4 pb-4 sm'>
                <h3 style={{ color: '#595959' }}>{need ==='email' ? 'Email or username':'Password'}</h3>
                <input
                    style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, padding:21, height:50, width:400}}
                    onChange={(e) =>  setValue(e.target.value)}
                    type={need === 'password'?'password':'email'} 
                    
                />
            </div>
        )
    }
  
