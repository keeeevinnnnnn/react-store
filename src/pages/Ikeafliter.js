import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Ikeafliter = (props) => {
  const { messages, setMessages } = props;
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // 送出後，可以一直往陣列新增新的選項
    setMessages([...messages, { input, id: uuidv4() }]);
    // 送出而且陣列新增選項後，清空輸入框
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form action="">
        <input type="text" onChange={inputHandler} value={input} />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Ikeafliter;
