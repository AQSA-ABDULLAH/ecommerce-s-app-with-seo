// CartItem.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../../app/lib/features/cart/slice";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 className="text-lg font-semibold">No Items in Cart</h2>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="py-4 border-b border-gray-300">
            <div className="flex gap-8 items-center">
              {item.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${item.title} image`}
                  className="w-14 h-14 rounded-md"
                />
              ))}
              <h3 className="font-semibold">{item.title}</h3>
            </div>

            <div className="flex w-[100%] justify-between">
              <p>{item.price}</p>
              <button onClick={() => handleDelete(item.id)}>
                <AiOutlineDelete className="cursor-pointer" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartItems;