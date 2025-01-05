import React from "react";

type Props = {
  imageSrc: string;
  productName: string;
  productNameTwo: string;
  price: number;
  isSelected: boolean;
  handleSelect: () => void;
  productCount: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const ProductCart: React.FC<Props> = ({
  imageSrc,
  productName,
  productNameTwo,
  price,
  isSelected,
  handleSelect,
  productCount,
  onIncrement,
  onDecrement,
}) => {
  const handleAddToCart = () => {
    if (!isSelected) {
      handleSelect();
    }
  };

  return (
    <div>
      <div className="mb-8 relative lg:aspect-square lg:max-w-72">
        <img
          className={`w-full transition-all lg:h-full duration-200 ease-in object-cover rounded-lg max-h-[inherit] ${
            isSelected ? "border-2 border-red" : "border-2 border-transparent"
          }`}
          src={imageSrc}
          alt={productName}
        />
        <button
          onClick={handleAddToCart}
          className={`w-40 group/addBtn px-4 min-h-[2.875rem] ${
            isSelected
              ? "bg-red border-red justify-between"
              : "border-rose-300 bg-white justify-center"
          } transition-colors hover:bg-red text-sm py-3 flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-[1.4375rem] font-semibold rounded-3xl border`}
        >
          {!isSelected ? (
            <>
              <svg
                className="text-red transition-all group-hover/addBtn:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
              >
                <g
                  className="transition-colors"
                  fill="currentColor"
                  clipPath="url(#a)"
                >
                  <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="transition-all duration-[250ms] ease-in group-hover/addBtn:text-white">
                Add to Cart
              </span>
            </>
          ) : (
            <>
              <div
                onClick={onDecrement}
                className="border hover:bg-white transition-colors hover:text-red text-white border-white rounded-full size-6 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="currentColor"
                  viewBox="0 0 10 2"
                >
                  <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </div>
              <span className="text-white">{productCount}</span>
              <div
                onClick={onIncrement}
                className="border hover:bg-white hover:text-red transition-colors text-white border-white rounded-full size-6 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentColor"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </div>
            </>
          )}
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-rose-500 text-sm">{productName}</p>
        <h3 className="font-semibold ">{productNameTwo}</h3>
        <p className="text-red font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCart;
