import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { clientContext } from "../../contexts/ClientContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calcPrice";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Cart = ({ handleClose }) => {
  const { getCart, cartData, changeCountProduct, makeOrder } =
    useContext(clientContext);
  useEffect(() => {
    getCart();
  }, []);
  const history = useHistory();
  function handleClick() {
    handleClose();
    makeOrder();
    history.push("/pay-form");
  }
  // console.log(cartData);
  return (
    <>
      {cartData ? (
        cartData.length ? (
          <div className="cart">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.product.id}>
                      <td>
                        <img width="50" src={item.product.image} />
                      </td>
                      <td>{item.product.title}</td>
                      <td>{item.product.price}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          onChange={(e) =>
                            changeCountProduct(e.target.value, item.product.id)
                          }
                          value={item.count}
                        />
                      </td>
                      <td>{calcSubPrice(item)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4>Всего: {calcTotalPrice(cartData)}</h4>
              <Link to="/pay-form">
                <button onClick={handleClick}>Оплатить</button>
              </Link>
            </div>
          </div>
        ) : (
          <h1>Корзина пуста</h1>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Cart;
