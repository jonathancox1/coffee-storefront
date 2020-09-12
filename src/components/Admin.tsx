import React, { useState } from 'react';

import Inventory from './Inventory';

export default function Admin() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setVerified] = useState(false);

  const verifyPassword = (e: any) => {
    e.preventDefault();
    const password = 'coffeetime';
    if (input !== password) {
      setError('Incorrect');
      setInput('');
      return;
    } else {
      setVerified((current) => !current);
    }
  };

  const handleChange = (e: any) => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  if (!isVerified) {
    return (
      <div>
        Admin Login Below
        <form onSubmit={(e) => verifyPassword(e)}>
          <input
            type="password"
            value={input}
            onChange={(e: any) => handleChange(e)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {error}
      </div>
    );
  } else {
    return <Inventory />;
  }
}
