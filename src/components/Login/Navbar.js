
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import { FaShoppingBasket, FaUser } from 'react-icons/fa';

export default class Navbar extends Component {
    render() {
        return (
            <div className='flex flex-row bg-white justify-between h-20 self-center'>
                <div>
                    <img
                        src='https://onlinedoctor.lloydspharmacy.com/blob/107294/ef868e66e577fe329572be260e9ee209/lloydspharmacy-od-logo-svg-data.svg'
                        style={{display:'flex',
                            width: 100,
                            height: 100,
                            resizeMode: 'contain'}}
                    />

                </div>

                <div className='flex flex-row justify-around w-36 self-center'>

                    <div className='flex flex-col'>
                        <FaShoppingBasket size={20} color={'black'} className='self-center' />
                        <h2 className='self-center'>Basket</h2>
                    </div>

                    <div className='flex flex-col'>
                        <FaUser size={20} color={'black'} className='self-center' />
                        <Link to={'/login'}>            <h2 className='self-center'>Account</h2></Link>
                    </div>
                </div>
            </div>
        )
    }
}