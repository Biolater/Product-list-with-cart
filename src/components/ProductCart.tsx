import photo from "../images/image-baklava-desktop.jpg";
import shoppingBasket from "../images/icon-add-to-cart.svg";

type Props = {
  imageSrc: string;
  productName: string;
  productNameTwo: string;
  price: number;
  isSelected: boolean;
  handleSelect: () => void;
};

const ProductCart: React.FC<Props> = ({
  imageSrc,
  productName,
  productNameTwo,
  price,
  isSelected,
  handleSelect,
}) => {
  return (
    <div className="">
      <div className="max-h-56 mb-8 relative">
        <img
          className={`w-full transition-all duration-200 ease-in object-cover rounded-lg max-h-[inherit] ${
            isSelected ? "border-2 border-red" : "border-2 border-transparent"
          }`}
          src={imageSrc}
          alt={productName}
        />
        <button
          onClick={handleSelect}
          className="w-40 overflow-hidden hover:bg-red group/addBtn hover:text-white transition-all  justify-center text-sm py-3 flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-[1.4375rem] font-semibold rounded-3xl bg-white border-rose-300 border"
        >
          <svg
            className={`text-red transition-all group-hover/addBtn:text-white ${
              isSelected ? "opacity-0 translate-y-[calc(100%+0.5rem)]" : "opacity-100"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
          >
            <g fill="currentColor" clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>{" "}
          <span className={`transition-all ${isSelected ? "-translate-y-[calc(100%+1.4375rem)]" : ""}`}>Add to Cart</span>
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
