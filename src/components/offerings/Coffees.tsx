import React, { useEffect, useState } from 'react';

import CoffeeCard from './CoffeeCard';

import './Coffees.scss';

interface ICoffeeProps {
  addToCart: (itemToAdd: {}) => void;
  whichCoffee: (selectedCoffee: {}) => void;
  moreInfo: (moreInfo: boolean) => void;
  coords: (coords: {}) => void;
}

export default function Coffees({
  addToCart,
  whichCoffee,
  moreInfo,
  coords,
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
        country: 'Ethiopia',
        region: 'Yirgacheffe',
        sub: 'Kochere',
        variety: 'Heirloom',
        process: 'Washed',
        alt: '1700-2000msl',
      },
      {
        name: 'Old Timer - Blend',
        price: 10,
        soldOut: false,
        comingSoon: false,
        description:
          'Our take on a classic medium roast profile, a revolving blend of Central and South American beans. Old Timer brews a sweet and smooth cup with flavors of chocolate and nuts. Currently 50% El Salvador 50% Guatemala',
        color: 'brown',
        country: 'El Salvador & Guatemala',
        region: 'Blend',
        variety: 'Bourbon & Typica & Caturra',
        process: 'Washed',
        alt: '1400-1600msl',
      },
      {
        name: 'Costa Rica - Esperanza',
        price: 13,
        soldOut: false,
        comingSoon: false,
        description:
          'This is the perfect way to start your day, this very typical coffee from the Tarrazu region offers up a clean and straightforward sweet cup with hints of dark chocolate, citrus and honey.  Tarrazu coffees are known to have a heavy body and complex aromas.',
        color: 'purple',
        country: 'Costa Rica',
        region: 'Tarrazu',
        variety: 'Caturra, Catuai',
        process: 'Washed',
        alt: '1200-1800msl',
        extra: 'Copa De Esperanza translates to the "Cup of Hope"'
      },
      {
        name: 'Colombia - Madre Laura',
        price: 17,
        soldOut: true,
        comingSoon: false,
        description:
          'This natural processed coffee from the Jerico region has a lot to offer! Flavors ranging from citrus notes of blood orange, to caramel, finishing with a snappy lemon lime acidity. Roasted light to preserve the the natural fruit like notes and increase acidity. A limited quantity, this coffee will not last long!',
        color: 'green',
        country: 'Colombia',
        region: 'Jerico, Antioquia',
        variety: 'Dos Mil & Castillo',
        process: 'Natural',
        alt: '1700-2000msl',
        extra:
          'Only the ripest cherries (24+ brix) are hand selected by the community of growers around he town of Jerico, Anioquia.  Attention to  detail along the entire process is key to bringing out the best that these naturally dried cherries can offer.',
      },
      // {
      //   name: 'Kenya - Kiambu Peaberry',
      //   price: 14,
      //   soldOut: true,
      //   comingSoon: false,
      //   description:
      //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
      //   color: 'purple',
      //   country: 'Kenya',
      //   region: 'Kiambu',
      //   sub: 'Muranga',
      //   variety: 'SL-28',
      //   process: 'Washed',
      //   alt: '1800msl',
      // },
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
            coords={coords}
          />
        );
      })}
    </div>
  );
}
