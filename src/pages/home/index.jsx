import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/basketContext";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToBasket } = useContext(BasketContext);
  const [isLoading, setIsLoading] = useState(true);

  const [fav, setFav] = useState(<FaRegHeart />);
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) ?? []
  );

  const addToWishlist = function (item) {
    console.log("item", item);

    let myItem = wishList.findIndex((x) => x.id == item.id);
    console.log("myitem", myItem);

    if (myItem == -1) {
      setFav(<FaHeart />);
      setWishList([...wishList, item]);
      console.log(wishList);
    } else {
      setFav(<FaRegHeart />);
      setWishList(wishList.filter((x) => x.id != item.id));
      console.log(wishList);
    }
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      //   setTimeout(() => {
      setIsLoading(false);
      //   }, 3000);
    });

  return (
    <div className="mainpage">
      <Helmet>
        <title>Products</title>
      </Helmet>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1>Our Products</h1>
          <div className="cards_container">
            {products.map((item) => {
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
                      onClick={() => addToWishlist(item)}
                    >
                      {fav}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
