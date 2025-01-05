import { AnimatePresence, motion } from "motion/react";

type Props = {
  imageSrc: string;
  productName: string;
  productNameTwo: string;
  price: number;
  isSelected: boolean;
  handleSelect: () => void;
  productCount: number;
};

const ProductCart: React.FC<Props> = ({
  imageSrc,
  productName,
  productNameTwo,
  price,
  isSelected,
  handleSelect,
  productCount,
}) => {
  const handleAddToCart = () => {
    if (!isSelected) {
      handleSelect();
    }
  };
  return (
    <motion.div layout transition={{ type: "spring", duration: 0.5 }}>
      <div className="mb-8 relative lg:aspect-square lg:max-w-72">
        <img
          className={`w-full transition-all lg:h-full duration-200 ease-in object-cover rounded-lg max-h-[inherit] ${
            isSelected ? "border-2 border-red" : "border-2 border-transparent"
          }`}
          src={imageSrc}
          alt={productName}
        />
        <motion.button
          animate={isSelected && { justifyContent: "space-between" }}
          transition={{ delay: 0.3 }}
          onClick={handleAddToCart}
          className={`w-40 px-4 min-h-[2.875rem] max-h-[2.875rem] ${
            isSelected ? "bg-red border-red" : "border-rose-300 bg-white "
          } transition-colors overflow-hidden hover:bg-red group/addBtn justify-center text-sm py-3 flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-[1.4375rem] font-semibold rounded-3xl border`}
        >
          <AnimatePresence>
            {!isSelected && (
              <>
                <motion.svg
                  className="text-red transition-all group-hover/addBtn:text-white"
                  initial={{ opacity: 1, translateY: 0 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: "1200%" }}
                  transition={{ duration: 0.25 }}
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
                </motion.svg>
                <motion.span
                  className="transition-all duration-[250ms] ease-in group-hover/addBtn:text-white"
                  initial={{ opacity: 1, translateY: 0 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: "-1200%" }}
                  transition={{ duration: 0.25 }}
                >
                  Add to Cart
                </motion.span>
              </>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isSelected && (
              <motion.div
                className="border hover:bg-white hover:text-red text-white border-white rounded-full size-6 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, position: "absolute" }}
                animate={{ opacity: 1, scale: 1, position: "relative" }}
                exit={{ opacity: 0, scale: 0, position: "absolute" }}
                transition={{ delay: 0.3 }}
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
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isSelected && (
              <motion.span
                className="text-white"
                transition={{ delay: 0.3 }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  width: 0,
                  position: "absolute",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  width: "auto",
                  position: "relative",
                }}
              >
                {productCount}
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isSelected && (
              <motion.div
                className="border hover:bg-white hover:text-red text-white border-white rounded-full size-6 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, position: "absolute" }}
                animate={{ opacity: 1, scale: 1, position: "relative" }}
                exit={{ opacity: 0, scale: 0, position: "absolute" }}
                transition={{ delay: 0.3 }}
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
                </svg>{" "}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <div className="flex flex-col">
        <p className="text-rose-500 text-sm">{productName}</p>
        <h3 className="font-semibold ">{productNameTwo}</h3>
        <p className="text-red font-semibold">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCart;
