import React, { useState, useEffect } from "react";
import axios from "commons/axios";
import Layout from "Layout";
import Cartitem from "components/Cartitem";
import { formatPrice } from "commons/helper";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/carts").then((res) => {
      setCarts(res.data);
    });
  }, []);

  const totalPrice = () => {
    const totalPrice = carts
      .map((cart) => {
        return cart.mount * parseInt(cart.price);
      })
      .reduce((a, value) => a + value, 0);
    return formatPrice(totalPrice);
  };

  const updateCart = (cart) => {
    const newCarts = [...carts];
    // 找到購物車裡，該商品是購物車裡的第幾個索引值
    const _index = newCarts.findIndex((c) => c.id === cart.id);
    // 從索引值第 _index開始，刪除1個，在新增cart=該點擊的商品
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };

  const deleteCart = (cart) => {
    const _carts = carts.filter((c) => c.id !== cart.id);
    setCarts(_carts);
  };

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-list">
          <TransitionGroup component={null}>
            {carts.map((cart) => (
              <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                <Cartitem
                  key={cart.id}
                  cart={cart}
                  updateCart={updateCart}
                  deleteCart={deleteCart}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {carts.length === 0 ? <p className="no-cart">NO PRODUCT</p> : ""}
        <div className="cart-total">
          Total:
          <span className="total-price">{totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
