import React, { forwardRef, useState, useImperativeHandle } from "react";
import { createRoot } from "react-dom/client";
import Addinventory from "components/Addinventory";

const Panel = forwardRef((props, ref) => {
  const [active, setActive] = useState("false");

  useImperativeHandle(ref, () => ({
    open() {
      setActive("true");
    },
  }));

  const _class = {
    true: "panel-wrapper active",
    false: "panel-wrapper",
  };

  const close = (data) => {
    setActive("false");
    alert(data);
  };
  return (
    <div className={_class[active]}>
      <div className="over-layer" onClick={close}></div>
      <div className="panel">
        <div className="head">
          <span className="close" onClick={close}>
            x
          </span>
          <Addinventory close={close} />
        </div>
      </div>
    </div>
  );
});
const _div = document.createElement("div");
document.body.appendChild(_div);

const _panel = createRoot(_div);
_panel.render(<Panel />);

export default Panel;
