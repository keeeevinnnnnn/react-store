import React, { useState } from "react";
import Ikeafliter from "./Ikeafliter";
import Info from "./Info";

const Father = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div>
      <Ikeafliter messages={messages} setMessages={setMessages} />
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default Father;
