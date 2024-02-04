import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact.js'
import About from './About'

const Rout = ({ shop, Fillter, allcatefilter, addtocart, cart, setcart }) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home addtocart={addtocart} />} />
                <Route path='/cart' element={<Cart setcart={setcart} cart={cart} />} />
                <Route path='/shop' element={<Shop shop={shop} Fillter={Fillter} allcatefilter={allcatefilter} addtocart={addtocart} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}

export default Rout;