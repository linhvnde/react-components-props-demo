import { useState } from 'react';

export default function Message(props) {
  const [message, setMessage] = useState('Welcome Visitor');
  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() => {
          return setMessage('Thank you for subscribing');
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
