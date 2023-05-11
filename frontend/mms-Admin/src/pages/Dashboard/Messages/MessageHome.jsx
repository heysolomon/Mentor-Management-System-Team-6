import React, { useState, useEffect } from 'react';
import MessageSelect from './BrowsePeople';
import NoMessage from './NoMessage';

export default function MessageHome() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
  }, []);

  if (messages.length <= 0) {
    return <NoMessage />;
  }

  return <MessageSelect />;
}
