import React, { useEffect, useState } from 'react';

import CoffeeCard from './CoffeeCard';

import './Coffees.scss';

interface ICoffeeProps {
  addToCart: (itemToAdd: {}) => void;
}

export default function Coffees({ addToCart }: ICoffeeProps) {
  const [currentOfferings, setOfferings] = useState([{}]);
  useEffect(() => {
    // TODO call API get current offerings
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

  return (
    <div className="coffeeWrapper">
      {currentOfferings.map((offering: {}) => {
        return <CoffeeCard addToCart={addToCart} coffeeInfo={offering} />;
      })}
    </div>
  );
}
