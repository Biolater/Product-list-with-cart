import emptyCart from "../images/illustration-empty-cart.svg";

const YourCart = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg gap-4 bg-white">
      <h3 className="text-2xl font-bold  text-red self-start">Your Cart (0)</h3>
      <img src={emptyCart} alt="Empty Cart" />
      <p className="text-rose-500 font-medium">
        Your added items will appear here
      </p>
    </div>
  );
};

export default YourCart;
