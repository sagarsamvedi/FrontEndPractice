import { useParams } from "react-router-dom";
import { products } from "../product_data";
import { useEffect } from "react";
import { useState } from "react";
import AutoType from "./AutoType";
import Navigate from "./Navigate";



const ProductDetail = () => {
  const [currentProductDetail, setcurrentProductDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const productDetail = products.find((item) => item.id === parseInt(id));
    setcurrentProductDetail(productDetail);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {currentProductDetail ? (
        <>
        <div className="product-detail">
          <div className="product">
            <h1>{currentProductDetail.name}</h1>
            <h3 className="product-price">
              <span>₹</span>
              {currentProductDetail.price}
            </h3>
            <p className="product-des">
                <AutoType description = {currentProductDetail.description}/>
            </p>
            
          </div>
          <div className="product-img">
            <img
              src={currentProductDetail.imgUrl}
              className="card-img-top"
              alt=""
            />
          </div>
        </div>

        <div className="navigate" style={{textAlign :'center'}}>
          <Navigate/>
        </div>
        </>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
