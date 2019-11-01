import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
       <ul className="right" >
           <li><NavLink to="/">Search Entry</NavLink></li>
           <li><NavLink to="/">New Entry</NavLink></li>
       </ul>
    )
}

export default SignedOutLinks