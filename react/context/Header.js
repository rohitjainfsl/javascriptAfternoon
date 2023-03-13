/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import {EcommerceContext} from './Main'
import {Link} from 'react-router-dom'


function Header() {
  const {cart} = useContext(EcommerceContext)
  return (
    <header>
        <h1>Home</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart <span>{cart.length}</span></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header