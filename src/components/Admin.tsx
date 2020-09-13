import React, { useState, useEffect } from 'react';

import Inventory from './Inventory';

import './Admin.scss';

export default function Admin() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setVerified] = useState(false);
  const [currentOfferings, setOfferings] = useState([{}]);

  useEffect(() => {
    // TODO call api for current offerings
    // set into currentOfferings
    setOfferings([
      {
        name: 'Ethiopia Geta Bore',
        price: 13,
        description:
          'Geta Bore has unique, resiny-sweet aromatics, pine and amber resin, caramel, cinnamon bark and a yellow custard note. Dark roasts yield syrupy chocolate flavors. City+ to Full City+. Good for espresso.',
      },
      {
        name: 'Kenya Nyeri Ichamama AB',
        price: 16,
        description:
          'Grabby citrus flavors like pink grapefruit and kumquat are buttressed by panela and caramelizing sugar sweetness, and a hint of cranberry sauce. Shimmering acidity. City to Full City.',
      },
      {
        name: 'Panama Volcan Baru Estate',
        price: 12,
        description:
          'A crowd pleasing cup, notes of almond biscotti, caramel, rice cake, macadamia and walnut, chocolate graham cracker and a tannic vibrance that has a mouth feel of matcha powder. City+ to Full City+. Good for espresso.',
      },
      {
        name: 'New Classic Blend',
        price: 11,
        description:
          'A classic, balanced espresso, but without the baggage of the old world espresso conventions ...and without robusta! The espresso has balanced bittersweet notes, thick and opaque body, almond and chocolate roast flavors, hints of peach tea, spice, jasmine.',
      },
    ]);
  }, []);

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
    return (
      <div className="inventoryWrapper">
        {currentOfferings.map((coffee: any, index: number) => {
          return (
            <>
              <div className="offering">Offering {index + 1}</div>
              <Inventory coffee={coffee} key={coffee.name} />
            </>
          );
        })}
        <div className="offering">
          New Offering {currentOfferings.length + 1}
        </div>
        <Inventory
          coffee={{ name: '', price: '', quantity: '', description: '' }}
        />
      </div>
    );
  }
}
