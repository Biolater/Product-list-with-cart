type Props = {
  productNameTwo: string;
  productCount: number;
  actualPrice: number;
  totalPrice: number;
  onRemove: () => void;
};

const CartItem: React.FC<Props> = ({
  productNameTwo,
  productCount,
  actualPrice,
  totalPrice,
  onRemove,
}) => {
  return (
    <li className="flex items-center py-3 border-b border-b-[#f4f4f4] justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{productNameTwo}</p>
        <div className="flex gap-2">
          <span className="text-red font-semibold">{productCount}x</span>
          <span className="text-rose-500">@ {actualPrice}</span>
          <span className="text-rose-500 font-semibold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="flex items-center justify-center border-2 border-[#CAAFA7] rounded-full p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </li>
  );
};

export default CartItem;
