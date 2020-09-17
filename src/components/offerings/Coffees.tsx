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
        name: 'Old Timer - Blend',
        price: 10,
        description:
          'Our take on a classic medium roast profile, a revolving blend of Central and South American beans. Old Timer brews a sweet and smooth cup with flavors of chocolate and nuts. Currently 50% El Salvador 50% Guatemala',
      },
      {
        name: 'Kenya - Kiambu Peaberry',
        price: 14,
        description:
          'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
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
