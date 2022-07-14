import React from "react";
import { formatPrice } from "commons/helper";
import PropTypes from "prop-types";
import axios from "commons/axios";
import { toast } from "react-toastify";

const Product = ({ name, image, tags, price, status, id, updateCartNum }) => {
  const _pClass = {
    available: "product",
    unavailable: "product out-stock",
  };

  Product.prototype = {
    status: PropTypes.string,
    updateCartNum: PropTypes.func,
  };

  // console.log("updateCartNum---------", updateCartNum);

  const addCart = async () => {
    try {
      const res = await axios.get(`/carts?productId=${id}`);

      const carts = res.data;
      console.log(carts);
      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        await axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name: name,
          image: image,
          price: price,
          mount: 1,
        };
        await axios.post("/carts", cart);
      }
      toast.success();
      updateCartNum();
    } catch (error) {
      toast.error("Add Cart Failed");
    }
  };

  return (
    <div className={_pClass[status]}>
      <div className="p-content">
        <div className="img-wrapper">
          <div className="out-stock-text">Out of Stock</div>
          <figure className="image is-4by3">
            <img src={image} alt={name} />
          </figure>
        </div>
        <p className="p-tags">{tags}</p>
        <p className="p-name">{name}</p>
      </div>
      <div className="p-footer">
        <p className="price">{formatPrice(price)}</p>
        <button
          className="add-cart"
          disabled={status === "unavailable"}
          onClick={addCart}
        >
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
