import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'


const Cart = ({ cart, setcart }) => {
  // increase Quantity of cart product 
  const incqty = (product) =>
  {
    const exist = cart.find((x)=>{
      return x.id === product.id 
    })
    setcart(cart.map((item) => 
    {
      return item.id === product.id ? {...exist, qty: exist.qty + 1} : item 
    }))
  }
  // Decrease Quantity of cart product 
  const decqty = (product) =>
  {
    const exist = cart.find((x)=>{
      return x.id === product.id 
    })
    setcart(cart.map((item) => 
    {
      return item.id === product.id ? {...exist, qty: exist.qty - 1} : item 
    }))
  }
  // Removeing cart Product
  const removeproduct = (product) => 
  {
    const exist = cart.find((x) =>{
      return x.id === product.id
    })
    if (exist.qty > 0) 
    {
      setcart(cart.filter((item)=>
      {
        return item.id !== product.id
      }))
    }
  }
  // Total Price 
  const total = cart.reduce((price, item)=> price + item.qty * item.price, 0)
  return (
    <>
      <div className='cart'>
        <h3>#cart</h3>
        {
          cart.length === 0 &&
          <>
            <div className='empty_cart'>
              <h2>Your Shopping cart is Empty</h2>
              <Link to='/shop'><button>Shop Now</button></Link>
            </div>
          </>
        }
        <div className='container'>
          {
            cart.map((item) => {
              return (
                <>
                  <div className='box'>
                    <div className='img_box'>
                      <img src={item.image} alt='item' />
                    </div>
                    <div className='detail'>
                      <div className='info'>
                        <h4>{item.cat}</h4>
                        <h3>{item.Name}</h3>
                        <p>Price: $ {item.price}</p>
                        <p>Total: $ {item.qty * item.price}</p>
                      </div>
                      <div className='quantity'>
                        <button onClick={()=> incqty (item)}>+</button>
                        <input type='number' value={item.qty} />
                        <button onClick={()=> decqty (item)}>-</button>
                      </div>
                      <div className='icon'>
                        <li onClick={()=> removeproduct (item)}> <AiOutlineClose /> </li>
                      </div>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className='bottom'>
          {
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4>Total: ${total}</h4>
            </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Cart