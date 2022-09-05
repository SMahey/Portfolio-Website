import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">PROJECTS</h1>
        <p className="pl-desc">
         There projects are based on the languages such as Html, Css, Js, Python and React.js
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} title = {item.title} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
