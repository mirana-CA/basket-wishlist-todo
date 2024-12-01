import React, { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = function (item) {
    let findedElem = basket.find((x) => x.id == item.id);
    if (!findedElem) {
      setBasket([...basket, { ...item, count: 1 }]);

      return;
    }
    findedElem.count++;
    setBasket([...basket]);

    console.log(basket);
  };
  const decrease = function (item) {
    let findedElem = basket.find((x) => x.id == item.id);
    if (findedElem.count > 1) {
      findedElem.count--;
      setBasket([...basket]);
    } else {
      return;
    }
  };
  const removeFromBasket = function (item) {
    setBasket(basket.filter((elem) => elem.id != item.id));
  };
  return (
    <BasketContext.Provider
      value={{ basket, setBasket, addToBasket, removeFromBasket, decrease }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
