import React, { useState, useEffect } from 'react';
import MessageSelect from './BrowsePeople';
import NoMessage from './NoMessage';

export default function MessageHome() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
  }, []);

  return <div>{messages.length > 0 ? <MessageSelect /> : <NoMessage />}</div>;
}
