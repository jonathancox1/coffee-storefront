import React, { useEffect, useState } from 'react';
import { getCoffees } from '../../util/firebase';

import CoffeeCard from './CoffeeCard';

import './Coffees.scss';

interface ICoffeeProps {
  addToCart: (itemToAdd: {}) => void;
}

export default function Coffees({ addToCart }: ICoffeeProps) {
  const [currentOfferings, setOfferings] = useState([{}]);
  const [firebaseOffering, setFBOfferings] = useState([{}]);
  const [isLoading, setIsLoading] = useState('true');

  useEffect(() => {
    // TODO call API get current offerings
    // const wait = async () => {
    //   return await getCoffees();
    // };
    // wait().then((res) => {
    //   setOfferings(res);
    // });
    // setOfferings(coffeeList);
    // setOfferings([
    //   {
    //     name: 'Kenya - Kiambu Peaberry',
    //     price: 14,
    //     soldOut: true,
    //     comingSoon: false,
    //     description:
    //       'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
    //     color: 'purple',
    //   },
    //   {
    //     name: 'Old Timer - Blend',
    //     price: 10,
    //     soldOut: false,
    //     comingSoon: false,
    //     description:
    //       'Our take on a classic medium roast profile, a revolving blend of Central and South American beans. Old Timer brews a sweet and smooth cup with flavors of chocolate and nuts. Currently 50% El Salvador 50% Guatemala',
    //     color: 'brown',
    //   },
    //   {
    //     name: 'Ethiopia - Kochere',
    //     price: 14,
    //     soldOut: false,
    //     comingSoon: true,
    //     description:
    //       'Light and bright, this washed coffee from the Yirgacheffe sub-region boasts delicate floral notes with a peach like sweetness. Coming Soon!',
    //     color: 'red',
    //   },
    //   // {
    //   //   name: 'Kenya - Kiambu Peaberry',
    //   //   price: 14,
    //   //   description:
    //   //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
    //   //   color: 'red',
    //   // },
    //   // {
    //   //   name: 'Kenya - Kiambu Peaberry',
    //   //   price: 14,
    //   //   description:
    //   //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
    //   //   color: 'green',
    //   // },
    //   // {
    //   //   name: 'Kenya - Kiambu Peaberry',
    //   //   price: 14,
    //   //   description:
    //   //     'A rare and exciting coffee from one of my favorite origins.  Roasted light, this coffee shows a complex profile. Subtle notes of berries and dark chocolate with a medium body.',
    //   //   color: 'blue',
    //   // },
    // ]);
  }, []);

  useEffect(() => {
    setOfferings(getCoffees());
  }, []);

  // useEffect(() => {
  //   const coffee = localStorage.getItem('coffees');
  //   console.log(coffee);
  //   if (coffee !== null) {
  //     setOfferings(JSON.parse(coffee));
  //   }
  // }, []);

  return (
    <div className="coffeeWrapper">
      {currentOfferings.length <= 1 && 'Loading the freshest coffees...'}
      {currentOfferings.length > 1 &&
        currentOfferings.map((offering: {}) => {
          return <CoffeeCard addToCart={addToCart} coffeeInfo={offering} />;
        })}
    </div>
  );
}
