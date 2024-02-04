import React, { useState } from 'react'
import Nav from './Comp/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Comp/Rout'
import Footer from './Comp/Footer'
import Homeproduct from './Comp/HomeProducts'
const App = () => {
  // Add to cart 
  const [cart, setcart] = useState([])
  // Shop page Product
  const [shop, setShop] = useState(Homeproduct)
  // shop Search filter
  const [search, setSearch] = useState('')

  const Fillter = (p) => {
    const catefilter = Homeproduct.filter((Product) => {
      return Product.cat === p
    })
    setShop(catefilter)
  }
  const allcatefilter = () => {
    setShop(Homeproduct)
  }
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something !")
      setShop(Homeproduct)
    }
    else {

      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter)
    }
  }
  // Add to cart
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert("This Product is alleardy added in cart")

    } else {
      alert("product Added to cart")
      setcart([...cart, { ...product, qty: 1 }])
    }
  }
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setcart={setcart} cart={cart} shop={shop} Fillter={Fillter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App