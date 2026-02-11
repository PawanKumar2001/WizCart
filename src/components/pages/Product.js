import React from 'react'
import Carousel from '../carousel'
import Cardhead from '../Cardheading'
import { Link } from 'react-router-dom';

function Product(props) {
  const addedtocart = () => {
    var cart = document.getElementById('cart').innerHTML;
    if (cart === "Add to Cart"){
      cart = "In Cart";
      document.getElementById('cart').innerHTML = cart;
    }
  }


  return (
    <>
      <div className="mt-5">
        <Carousel src1={props.src1} src2={props.src2} src3={props.src3} />
      </div>
      <Cardhead mode={props.mode} togglemode={props.togglemode} cardhead={props.pname} />
      <div className='d-flex flex-column'>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.description}</p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.price}</p>
      </div>
      <div className="container d-flex justify-content-center flexgap">
        <Link className="btn btn-outline-secondary p-3 mr-1 rounded-pill" to={`/buy/${props.pname}/${props.description}/${props.price}/${encodeURIComponent(props.src1)}`} >Buy Now</Link>
        <button className="btn btn-outline-secondary p-3 rounded-pill" type="submit" onClick={addedtocart}  id='cart'>Add to Cart</button>
      </div>
      <Cardhead mode={props.mode} togglemode={props.togglemode} cardhead="Product Info" />
      <div className="container d-flex flex-column justify-content-center flexgap">
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.desc1}</p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.desc2}</p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.desc3}</p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.desc4}</p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"} text-center`}>{props.desc5}</p>
      </div>

    </>
  )
}

export default Product

Product.defaultProps = {
  pname: "Product Name",
  description: "Product Description",
  price: "Product Price"
}