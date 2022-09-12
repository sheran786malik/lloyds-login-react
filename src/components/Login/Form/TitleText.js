import React from 'react'

export default function TitleText({ name }) {
    return (
        <div>
            <h2 style={{fontFamily:'Open Sans', fontWeight:300, fontSize:'2.25rem', textAlign:'center'}}>    {name}      </h2>
        </div>
    )
}
