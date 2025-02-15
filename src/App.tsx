import "./App.css";
import ProductCart from "./components/ProductCart";
import waffle from "./images/image-waffle-mobile.jpg";
import cremeBrulee from "./images/image-creme-brulee-mobile.jpg";
import macaron from "./images/image-macaron-mobile.jpg";
import tiramisu from "./images/image-tiramisu-mobile.jpg";
import baklava from "./images/image-baklava-mobile.jpg";
import pie from "./images/image-meringue-mobile.jpg";
import cake from "./images/image-cake-mobile.jpg";
import brownie from "./images/image-brownie-mobile.jpg";
import pannaCotta from "./images/image-panna-cotta-mobile.jpg";
import YourCart from "./components/YourCart";
import { useState } from "react";
import { motion } from "motion/react";

const PRODUCTS = [
  {
    imageSrc: waffle,
    productName: "Waffle",
    productNameTwo: "Waffle with Berries",
    price: 6.5,
  },
  {
    imageSrc: cremeBrulee,
    productName: "Crème Brûlée",
    productNameTwo: "Vanilla Bean Crème Brûlée",
    price: 7,
  },
  {
    imageSrc: macaron,
    productName: "Macaron",
    productNameTwo: "Macaron mix of Five",
    price: 8,
  },
  {
    imageSrc: tiramisu,
    productName: "Tiramisu",
    productNameTwo: "Classic Tiramisu",
    price: 5.5,
  },
  {
    imageSrc: baklava,
    productName: "Baklava",
    productNameTwo: "Pistachio Baklava",
    price: 4,
  },
  {
    imageSrc: pie,
    productName: "Pie",
    productNameTwo: "Lemon Meringue Pie",
    price: 5,
  },
  {
    imageSrc: cake,
    productName: "Cake",
    productNameTwo: "Red Velvet Cake",
    price: 4.5,
  },
  {
    imageSrc: brownie,
    productName: "Brownie",
    productNameTwo: "Salted Caramel Brownie",
    price: 5.5,
  },
  {
    imageSrc: pannaCotta,
    productName: "Panna Cotta",
    productNameTwo: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

export type SelectedProduct = {
  productName: string;
  productNameTwo: string;
  price: number;
  productCount: number;
  imageSrc: string;
};

function App() {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const handleProductSelect = (product: (typeof PRODUCTS)[0]) => {
    const { productName, price, productNameTwo } = product;
    const addedProduct = {
      productName,
      productNameTwo,
      price,
      productCount: 1,
      imageSrc: product.imageSrc,
    };
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      addedProduct,
    ]);
  };
  const handleIncrement = (productName: string) => {
    setSelectedProducts((prevSelectedProducts) => {
      return prevSelectedProducts.map((selectedProduct) => {
        if (selectedProduct.productName === productName) {
          return {
            ...selectedProduct,
            productCount: selectedProduct.productCount + 1,
          };
        }
        return selectedProduct;
      });
    });
  };

  const handleDecrement = (productName: string) => {
    setSelectedProducts((prevSelectedProducts) => {
      const product = prevSelectedProducts.find(
        (selectedProduct) => selectedProduct.productName === productName
      );
      if (product?.productCount && product.productCount - 1 === 0) {
        return prevSelectedProducts.filter(
          (selectedProduct) => selectedProduct.productName !== productName
        );
      } else {
        return prevSelectedProducts.map((selectedProduct) => {
          if (selectedProduct.productName === productName) {
            return {
              ...selectedProduct,
              productCount: selectedProduct.productCount - 1,
            };
          }
          return selectedProduct;
        });
      }
    });
  };
  const handleRemove = (productName: string) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter(
        (product) => product.productName !== productName
      )
    );
  };
  const handleStartNewOrder = () => {
    setSelectedProducts([]);
  };
  return (
    <main className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mx-auto lg:flex gap-6 lg:justify-center">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 sm:text-5xl sm:mb-6 md:text-6xl">
          Desserts
        </h1>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,minmax(0,18rem))] gap-4 mb-6">
          {PRODUCTS.map((product) => (
            <ProductCart
              onDecrement={() => handleDecrement(product.productName)}
              onIncrement={() => handleIncrement(product.productName)}
              isSelected={selectedProducts.some(
                (selectedProduct) =>
                  selectedProduct.productName === product.productName
              )}
              handleSelect={() => handleProductSelect(product)}
              productCount={
                selectedProducts.find(
                  (selectedProduct) =>
                    selectedProduct.productName === product.productName
                )?.productCount || 0
              }
              key={product.productName}
              {...product}
            />
          ))}
        </motion.div>
      </div>
      <YourCart
        onStartNewOrder={handleStartNewOrder}
        addedProducts={selectedProducts}
        onRemove={handleRemove}
      />
    </main>
  );
}

export default App;
