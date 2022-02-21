import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [message, setMessage] = useState(0);
  const [notification, setNotification] = useState(4);

  useEffect(() => {
    console.log("This is Use Effecct called", message, "times");
  }, [message]);

  return (
    <div>
      {console.log("This is Render")}
      <h1>UseEffect</h1>
      You Received - {message} Messages <br />
      You Received - {notification} Notification
      <br />
      <button onClick={() => setMessage(message + 1)}>Send Message</button>
      <button onClick={() => setNotification(notification + 1)}>
        Send Notification
      </button>
    </div>
  );
};

export default UseEffectComp;
