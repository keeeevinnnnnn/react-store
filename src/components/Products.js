import React, { useEffect, useRef, useState } from "react";
import ToolBox from "components/ToolBox";
import Product from "components/Product";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Panel from "components/Panel";
import Addinventory from "components/Addinventory";
import PropTypes from "prop-types";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [compProducts, setCompProducts] = useState([]);

  Products.prototype = {
    search: PropTypes.func,
  };

  useEffect(() => {
    axios.get("/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      setCompProducts(res.data);
    });
  }, []);

  const search = (text) => {
    // 1. Get new array
    let _products = [...compProducts];
    // 2. filter new array
    _products = _products.filter((p) => {
      // name: Abcd text: ab  ===> ['Ab] ex: 'Abcd'.match(new RegExp('ab','gi')) --> ['Ab']
      // text: '' ===> ["","",""] ex: 'Abcd'.match(new RegExp('','gi')) -->  ['', '', '', '', '']
      const matchArray = p.name.match(new RegExp(text, "gi"));
      // 轉換為布林值，如果 matchArray不是空值
      return !!matchArray;
    });
    // 3. set state
    setProducts(_products);
  };

  const btnRef = useRef(null);

  const toAdd = () => {
    btnRef.current.open();
  };

  const [cartNum, setCartNum] = useState(0);

  const updateCartNum = async () => {
    const cartNum = await initCartNum();
    setCartNum(cartNum);
  };

  // 從購物車拿到數據
  const initCartNum = async () => {
    const res = await axios.get("/carts");
    const carts = res.data || [];
    // 拿到購物車裡面所有商品資料的每一筆數量
    const cartNum = carts
      .map((cart) => cart.mount)
      // reduce 函式 第一個參數是累加器，第二參數是當前的值。 a+ value , 0，這裡的0是初始值設為0
      .reduce((a, value) => a + value, 0);
    return cartNum;
  };

  return (
    <div>
      <ToolBox search={search} cartNum={cartNum} />
      <div className="products">
        <div className="columns is-multiline is-desktop">
          <TransitionGroup component={null}>
            {products.map((p) => {
              return (
                <CSSTransition
                  classNames="product-fade"
                  timeout={300}
                  key={p.id}
                >
                  <div className="column is-3" key={p.id}>
                    <Product
                      id={p.id}
                      name={p.name}
                      image={p.image}
                      tags={p.tags}
                      price={p.price}
                      status={p.status}
                      updateCartNum={updateCartNum}
                    />
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
        <Panel ref={btnRef} />
        <button
          className="button is-primary add-btn"
          onClick={() => {
            toAdd();
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Products;
