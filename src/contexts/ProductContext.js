import { createContext, useState, useEffect } from 'react';


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setproduts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setproduts(data);
    }
    fetchProducts()
  }, []);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>

};

export default ProductProvider;
