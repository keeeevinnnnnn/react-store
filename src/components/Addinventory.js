import React from "react";
import PropTypes from "prop-types";

const Addinventory = ({ close }) => {
  Addinventory.prototype = {
    close: PropTypes.func,
  };
  console.log("close", close);
  return (
    <div className="inventory">
      <p className="title has-text-centered">Inventory</p>
      <br />
      <div className="control">
        <button
          className="button"
          onClick={() => {
            close("hello");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Addinventory;
