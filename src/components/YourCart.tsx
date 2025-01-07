import { type SelectedProduct } from "../App";
import emptyCart from "../images/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import carbon from "../images/icon-carbon-neutral.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import confirmedImage from "../images/icon-order-confirmed.svg";

const YourCart: React.FC<{
  addedProducts: SelectedProduct[];
  onRemove: (productName: string) => void;
}> = ({ addedProducts, onRemove }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalLength = addedProducts.reduce(
    (total, product) => total + product.productCount,
    0
  );
  const totalPrice = addedProducts.reduce(
    (total, product) => total + product.price * product.productCount,
    0
  );

  return (
    <div className="flex flex-col lg:self-start lg:basis-1/3 xl:basis-1/4 p-6 rounded-lg gap-6 bg-white">
      <h3 className="text-2xl font-bold text-red self-start">
        Your Cart ({totalLength})
      </h3>
      {totalLength === 0 ? (
        <>
          <img className="self-center" src={emptyCart} alt="Empty Cart" />
          <p className="text-rose-500 text-center font-medium">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <ul>
            {addedProducts.map((product) => (
              <CartItem
                onRemove={() => onRemove(product.productName)}
                key={product.productName}
                productNameTwo={product.productNameTwo}
                productCount={product.productCount}
                actualPrice={product.price}
                totalPrice={product.price * product.productCount}
              />
            ))}
          </ul>
          <div className="flex justify-between items-center py-4">
            <p>Order Total</p>
            <p className="font-bold text-2xl">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2 px-6 py-4 bg-rose-100 rounded-lg">
            <img src={carbon} alt="Carbon Neutral" />
            <p>
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button className="w-full hover:bg-red/80 transition-colors py-4 rounded-full bg-red text-white">
                Confirm Order
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-start p-5">
                <img src={confirmedImage} alt="Confirmed" />
                <DrawerTitle className="text-4xl font-bold max-w-72">
                  Order Confirmed
                </DrawerTitle>
                <DrawerDescription>
                  We hope you enjoyed your food!
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-5">
                <div className="p-4 bg-rose-100 rounded-lg w-full">
                  <ul>
                    {addedProducts.map((product) => (
                      <li
                        key={product.productName}
                        className="flex border-b border-b-rose-300/50 items-center gap-5 py-4"
                      >
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
                            <span className="text-rose-500">
                              @ {product.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <span className="font-semibold ms-auto">
                          ${(product.price * product.productCount).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center py-6">
                    <p>Order Total</p>
                    <p className="font-bold text-2xl">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <DrawerFooter className="p-5">
                <DrawerClose asChild>
                  <button className="w-full hover:bg-red/80 transition-colors py-4 rounded-full bg-red text-white">
                    Start New Order
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </div>
  );
};

export default YourCart;
