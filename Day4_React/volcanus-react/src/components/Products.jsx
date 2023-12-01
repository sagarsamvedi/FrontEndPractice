import { useState } from "react";
// import Navbar from "./Navbar";
import { products } from '../product_data'
import '../assets/Products.css'

const Products = () => {


  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const [product,setProduct] = useState(products);

  const filterMethod = (category) =>{
    setProduct(products.filter(item => item.category == category))
  }
  const showAll = () => {
    setProduct(products)
  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="container d-flex sticky-top">
          <button className = "btn btn-primary" onClick={showAll}>Reset</button>
          <button className = "btn btn-danger" onClick={() => filterMethod('TVs')}>TVs</button>
          <button className = "btn btn-info" onClick={() => filterMethod('Mobiles')}>Mobiles</button>
          <button className = "btn btn-warning"onClick={() => filterMethod('Cameras')}>Cameras</button>
          <button className = "btn btn-success"onClick={() => filterMethod('Wearables')}>Wearables</button>
        </div>
      <div className="container" style={{ backgroundColor: "#000000" }}>
        {product.map((data) => (
          <div className="products" key={data.id}>
            <div className="card" style={{ width: "18rem" }}>
              {/* Use curly braces for dynamic values */}
              <img src={data.imgUrl} className="card-img-top" alt="" />

              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h5 className="card-price" style={{ color: "#fff" }}>₹{data.price}</h5>
                <p className="card-text">
                {showFullDescription ? data.description : `${data.description.slice(0, 100)}...`}
              </p>
              {data.description.length > 100 && (
                <button className="btn btn-link" onClick={toggleDescription}>
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </button>
              )}
                <a href="#" className="btn btn-light">
                  Add To Cart
                </a>
                <a href="#" className="btn btn-success">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
