import React, { useState } from "react";

const UseStateComp = () => {
  const [message, setMessage] = useState(0);
  const sendMessage = () => {
    setMessage(message + 1);
  };
  return (
    <div>
      <h1>UseState</h1>
      You Received - {message} Messages
      <br />
      {/* <button onClick={() => setMessage(message + 1)}>Send Message</button> */}
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default UseStateComp;
