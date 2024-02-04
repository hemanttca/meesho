import React, { useState } from 'react'
import './Shop.css'
import { AiFillEye, AiFillHeart, AiOutlineClose } from 'react-icons/ai'

const Shop = ({ shop, Fillter, allcatefilter, addtocart }) => {
    // product details 
    const [showDetail, setShowDetail] = useState(false)
    // detail page data 
    const [detail, setdetail] = useState([])
    // Show Product 
    const showProduct = (product) => {
        const detaildata = ([{ product }])
        const productdetail = detaildata[0]['product']
        console.log(productdetail);
        setdetail(productdetail)
        setShowDetail(true)
    }
    // Close Product
    const closeProduct = () => {
        setShowDetail(false)
    }
    return (
        <>
            {
                showDetail ?
                    <>
                        <div className='product_detail'>
                            <button className='close_btn' onClick={() => closeProduct()}><AiOutlineClose /></button>
                            <div className='container'>
                                <div className='img_box'>
                                    <img src={detail.image} alt='product' />
                                </div>
                                <div className='info'>
                                    <h4># {detail.cat}</h4>
                                    <h2>{detail.Name}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex lacus,
                                        elementum non posuere ac, vehicula vitae nisi. Duis tempus diam at sapien
                                        faucibus ullamcorper. Proin mauris sapien
                                    </p>
                                    <h3>$ {detail.price}</h3>
                                    <button onClick={() => addtocart(detail)}>Add To Cart</button>

                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
            <div className='shop'>
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>All categories</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}># All</li>
                                    <li onClick={() => Fillter("tv")}># tv</li>
                                    <li onClick={() => Fillter("laptop")}># laptop</li>
                                    <li onClick={() => Fillter("watch")}># watch</li>
                                    <li onClick={() => Fillter("speaker")}># speaker</li>
                                    <li onClick={() => Fillter("electronics")}># electronics</li>
                                    <li onClick={() => Fillter("headphone")}># headphone</li>
                                    <li onClick={() => Fillter("phone")}># phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_left.avif' alt='banner' />
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_top.webp' alt='banner' />
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop Product</h2>
                            <div className='product_container'>
                                {
                                    shop.map((item, i) => {
                                        return (
                                            <>
                                                <div key={i} className='box'>
                                                    <div className='img_box'>
                                                        <img src={item.image} alt='product' />
                                                        <div className='icon'>
                                                            <li>
                                                                <AiFillHeart />
                                                            </li>
                                                            <li onClick={() => showProduct(item)}>
                                                                <AiFillEye />
                                                            </li>
                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>{item.Name}</h3>
                                                        <p>$ {item.price}</p>
                                                        <button onClick={() => addtocart(item)}>Add to cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop