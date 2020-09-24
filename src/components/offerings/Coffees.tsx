import React, { useEffect, useState } from 'react';

import CoffeeCard from './CoffeeCard';

import './Coffees.scss';

interface ICoffeeProps {
  addToCart: (itemToAdd: {}) => void;
  whichCoffee: (selectedCoffee: {}) => void;
  moreInfo: (moreInfo: boolean) => void;
}

export default function Coffees({
  addToCart,
  whichCoffee,
  moreInfo,
}: ICoffeeProps) {
  const [currentOfferings, setOfferings] = useState([{}]);
  useEffect(() => {
    // TODO call API get current offerings
    setOfferings([
      {
        name: 'Ethiopia - Kochere',
        price: 14,
        soldOut: false,
        comingSoon: false,
        description:
          'Light and bright, this washed coffee from the Yirgacheffe sub-region offers the typical clean flavors Ethiopian coffee is known for.  This heirloom variety boasts delicate floral notes with a peach like sweetness.',
        color: 'red',
      },
      {
        name: 'Old Timer - Blend',
        price: 10,
        soldOut: false,
        comingSoon: false,
        description:
          'Our take on a classic medium roast profile, a revolving blend of Central and South American beans. Old Timer brews a sweet and smooth cup with flavors of chocolate and nuts. Currently 50% El Salvador 50% Guatemala',
        color: 'brown',
      },
      {
        name: 'Colombia - Madre Laura',
        price: 17,
        description:
          'This natural processed coffee from the Jerico region has a lot to offer! Flavors ranging from citrus notes of blood orange, to caramel, finishing with a snappy lemon lime acidity. Roasted light to preserve the the natural fruit like notes and increase acidity. A limited quantity, this coffee will not last long!',
        color: 'green',
      },
      {
        name: 'Kenya - Kiambu Peaberry',
        price: 14,
        soldOut: true,
        comingSoon: false,
        description:
          'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
        color: 'purple',
      },
      // {
      //   name: 'Kenya - Kiambu Peaberry',
      //   price: 14,
      //   description:
      //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
      //   color: 'red',
      // },
      // {
      //   name: 'Kenya - Kiambu Peaberry',
      //   price: 14,
      //   description:
      //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
      //   color: 'green',
      // },
      // {
      //   name: 'Kenya - Kiambu Peaberry',
      //   price: 14,
      //   description:
      //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
      //   color: 'blue',
      // },
    ]);
  }, []);

  return (
    <div className="coffeeWrapper">
      {currentOfferings.map((offering: {}) => {
        return (
          <CoffeeCard
            addToCart={addToCart}
            coffeeInfo={offering}
            whichCoffee={whichCoffee}
            moreInfo={moreInfo}
          />
        );
      })}
    </div>
  );
}
