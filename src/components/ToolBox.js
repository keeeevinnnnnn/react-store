import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToolBox = (props) => {
  const { cartNum, search } = props;
  const [searchText, setSearchtext] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchtext(value);
    search(value);
  };

  const clearSearchText = () => {
    setSearchtext("");
    search("");
  };

  return (
    <div className="tool-box">
      <div className="logo-text">Store</div>
      <div className="search-box">
        <div className="field has-addons">
          <div className="control">
            <input
              type="text"
              className="input search-input"
              placeholder="Search Product"
              value={searchText}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <button className="button" onClick={clearSearchText}>
              X
            </button>
          </div>
        </div>
      </div>
      <Link to="cart" className="cart-box">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-num">({cartNum})</span>
      </Link>
    </div>
  );
};

export default ToolBox;
