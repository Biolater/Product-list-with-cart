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

  const handleConfirmOrder = () => {
    setIsDrawerOpen(true);
  };

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
              <button
                className="w-full hover:bg-red/80 transition-colors py-4 rounded-full bg-red text-white"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Order Confirmation</DrawerTitle>
                <DrawerDescription>
                  Your order has been confirmed.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p>Total Items: {totalLength}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
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
