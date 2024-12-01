import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/basketContext";
import { FaHeart } from "react-icons/fa6";

const Wishlist = () => {
  const { addToBasket } = useContext(BasketContext);
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) ?? []
  );
  const removeFromWishlist = function (item) {
    console.log("first");
    setWishList(wishList.filter((x) => x.id != item.id));
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="cards_container">
        {wishList.map((item) => {
          if (item.id < 25) {
            return (
              <div className="card" key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <div className="card-body">
                  <div>
                    <h5 className="card_title">{item.title}</h5>
                    <p className="card_category">{item.category.name}</p>

                    <p className="card_des">
                      {item.description.slice(1, 60)}...
                    </p>
                  </div>

                  <div className="card_ending">
                    <p className="card_price">${item.price}</p>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => addToBasket(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div
                  className="card_heart_icon"
                  onClick={() => removeFromWishlist(item)}
                >
                  <FaHeart />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Wishlist;
