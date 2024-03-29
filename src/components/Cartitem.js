import { formatPrice } from "commons/helper";
import axios from "commons/axios";
import React, { useState } from "react";

const Cartitem = (props) => {
  const [mount, setMount] = useState(props.cart.mount);
  const { id, name, image, price } = props.cart || {};
  // formatPric = 自訂義的轉換人民幣函式
  const sumPrice = formatPrice(mount * parseInt(price));

  const handleChange = (e) => {
    const _mount = parseInt(e.target.value);
    setMount(_mount);
    const newCart = {
      ...props.cart,
      mount: _mount,
    };
    axios.put(`/carts/${id}`, newCart).then((res) => {
      props.updateCart(newCart);
    });
  };

  const deleteCart = () => {
    axios.delete(`/carts/${id}`).then((res) => {
      props.deleteCart(props.cart);
    });
  };

  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow" onClick={deleteCart}>
        <span className="close">X</span>
      </div>

      <div className="column is-narrow">
        <img src={image} alt={name} width="100" />
      </div>

      <div className="column cart-name is-narrow">{name}</div>

      <div className="column">
        <span className="price">{formatPrice(price)}</span>
      </div>

      <div className="column">
        <input
          type="number"
          className="input num-input"
          min={1}
          value={mount}
          onChange={handleChange}
        />
      </div>

      <div className="column">
        <span className="sum-price">{sumPrice}</span>
      </div>
    </div>
  );
};

export default Cartitem;
