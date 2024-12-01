import React, { useContext, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/basketContext";
import { Helmet } from "react-helmet-async";

const Basket = () => {
  const { basket, addToBasket, removeFromBasket, decrease } =
    useContext(BasketContext);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  let subTotalPrice = 0;

  // for (let i = 0; i < basket.length; i++) {
  //   subTotalPrice += basket[1].price;
  // }
  return (
    <div className="basket_page">
      <Helmet>
        <title>Basket</title>
      </Helmet>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1>Basket</h1>
          <div className="basket_container">
            <table className="table">
              <tbody>
                {basket.map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <th>{i + 1}</th>
                      <td>
                        <img src={item.images[0]} alt={item.title} />
                      </td>
                      <td>{item.title} </td>
                      <td className="basket_counter">
                        <button onClick={() => decrease(item)}>-</button>
                        <span>{item.count}</span>
                        <button onClick={() => addToBasket(item)}>+</button>
                      </td>
                      <td>${item.count * item.price} </td>
                      <td
                        className="removeFromBtn"
                        onClick={() => removeFromBasket(item)}
                      >
                        Remove
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="basket_subtotal"> Subtotal: ${subTotalPrice}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
