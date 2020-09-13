import React, { useState } from 'react';

import './Inventory.scss';

interface IInfo {
  name: string;
  quantity: number;
  price: number;
  description: string;
}

interface IInventoryProps {
  coffee: any;
}

export default function Inventory({ coffee }: IInventoryProps) {
  const [info, setInfo] = useState<IInfo>({
    name: coffee.name,
    quantity: 0,
    price: coffee.price,
    description: coffee.description,
  });

  const initialValue = { name: '', quantity: 0, price: 0, description: '' };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // TODO api call
    setInfo(initialValue);
  };

  const handleChange = (e: any) => {
    const itemToUpdate: any = e.target.name;
    setInfo({ ...info, [itemToUpdate]: e.target.value });
  };

  return (
    <div className="formWrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="coffeeName"
          name="name"
          value={info.name}
          onChange={(e: any) => handleChange(e)}
        ></input>
        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          value={info.quantity}
          onChange={(e: any) => handleChange(e)}
        ></input>

        <input
          type="number"
          placeholder="price"
          name="price"
          value={info.price}
          onChange={(e: any) => handleChange(e)}
        ></input>

        <textarea
          placeholder="description"
          rows={5}
          name="description"
          value={info.description}
          onChange={(e: any) => handleChange(e)}
        ></textarea>
        <button type="submit">Add/Update Coffee</button>
        <button type="submit">Remove Coffee</button>
      </form>
    </div>
  );
}
