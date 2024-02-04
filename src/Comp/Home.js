import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeProduct from './HomeProducts'
import { AiFillEye, AiFillHeart, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'


const Home = ({ addtocart }) => {
    // Product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturdProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    //Tranding Product
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct)
    // Filter of tranding product
    const filtercate = (p) => {
        const filterProduct = HomeProduct.filter((item) => {
            return item.type === p

        })
        setTrendingProduct(filterProduct)
    }
    const allTrendingProduct = () => {
        setTrendingProduct(HomeProduct)
    }
    //Product Type
    useEffect(() => {
        productcategory()
    }, [])
    const productcategory = () => {
        // New Product
        const newcategory = HomeProduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        // Featured Product
        const featuredcategory = HomeProduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeaturdProduct(featuredcategory)

        // Top Product
        const topcategory = HomeProduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }
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
            <div className='home'>
                <div className='top_banner'>
                    <div className='contant'>
                        <h3>silver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className='trending'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='header'>
                                <div className='heading'>
                                    <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>top selling</h3>
                                </div>
                            </div>
                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((item, i) => {
                                            return (
                                                <>
                                                    <div key={i} className='box'>
                                                        <div className='img_box'>
                                                            <img src={item.image} alt='product' />
                                                            <div className='icon'>
                                                                <div className='icon_box'
                                                                    onClick={() => showProduct(item)}
                                                                >
                                                                    <AiFillEye />
                                                                </div>
                                                                <div className='icon_box'>
                                                                    <AiFillHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{item.Name}</h3>
                                                            <p>${item.price}</p>
                                                            <button onClick={() => addtocart(item)} className='btn'>Add to cart</button>

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='right_container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>our testmonial</h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='img_box'>
                                            <img src='image/T1.avif' alt='testmonial' />
                                        </div>
                                        <div className='info'>
                                            <h3>Stephan Robot</h3>
                                            <h4>web designer</h4>
                                            <p> We have vast experience in reshaping business models, and modernizing
                                                products. This enable us to generate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>join our malling list</p>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                                <BiLogoFacebook />
                                            </div>
                                            <div className='icon'>
                                                <BiLogoTwitter />
                                            </div>
                                            <div className='icon'>
                                                <BiLogoInstagram />
                                            </div>
                                            <div className='icon'>
                                                <BiLogoYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banners'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='box'>
                                <img src='image/Multi-Banner-1.avif' alt='banner' ></img>
                            </div>
                            <div className='box'>
                                <img src='image/Multi-Banner-2.avif' alt='banner' ></img>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='top'>
                                <img src='image/Multi-Banner-3.webp' alt='banner' ></img>
                                <img src='image/Multi-Banner-4.avif' alt='banner' ></img>
                            </div>
                            <div className='bottom'>
                                <img src='image/Multi-Banner-5.webp' alt='banner' ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div key={curElm.id} className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>$ {curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => showProduct(curElm)}><AiFillEye /></button>
                                                        <button><AiFillHeart /></button>
                                                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>$ {curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => showProduct(curElm)}><AiFillEye /></button>
                                                        <button><AiFillHeart /></button>
                                                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>$ {curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => showProduct(curElm)}><AiFillEye /></button>
                                                        <button><AiFillHeart /></button>
                                                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                                                    </div>
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
        </>
    )
}

export default Home