import React from "react";
import Message from "./Message";

const Info = (props) => {
  const { messages, setMessages } = props;
  return (
    <div>
      {messages.map((msg) => {
        return (
          <Message
            key={msg.id}
            msg={msg}
            messages={messages}
            setMessages={setMessages}
          />
        );
      })}
    </div>
  );
};

export default Info;
