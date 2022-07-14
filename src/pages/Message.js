import React from "react";
import "css/ikea.scss";

const Message = (props) => {
  const { msg, messages, setMessages } = props;

  const deleteHandler = () => {
    setMessages(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <div className="msg">
      <p>{msg.input}</p>
      <button  onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Message;
