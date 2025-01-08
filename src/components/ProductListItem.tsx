import React from "react";

type Product = {
  imageSrc: string;
  productName: string;
  productNameTwo: string;
  price: number;
  productCount: number;
};

type Props = {
  product: Product;
};

const ProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <li className="flex border-b border-b-rose-300/50 items-center gap-5 py-4">
      <img
        className="size-14 object-cover rounded-md"
        src={product.imageSrc}
        alt={product.productName}
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold max-w-40 text-sm sm:max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
          {product.productNameTwo}
        </p>
        <div className="flex gap-2">
          <span className="text-red font-semibold">
            {product.productCount}x
          </span>
          <span className="text-rose-500">@ {product.price.toFixed(2)}</span>
        </div>
      </div>
      <span className="font-semibold ms-auto">
        ${(product.price * product.productCount).toFixed(2)}
      </span>
    </li>
  );
};

export default ProductListItem;
