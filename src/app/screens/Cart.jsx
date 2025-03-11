import React from "react";

const Cart = () => {
  const { data: cart, isLoading } = useGetCartQuery(1); // Fake Store API supports only userId=1

  if (isLoading) return <div>Loading Cart...</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart?.products?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.products.map((item, index) => (
          <div key={index} className="border p-3 my-3">
            <p>Product ID: {item.productId}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
