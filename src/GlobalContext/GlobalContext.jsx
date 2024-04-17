
import { createContext, useEffect, useState } from "react";
import { supabase } from "../products";


export const MyProducts = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]); 


  useEffect(() => {
    getData();
    console.log(products);
  }, []);

  async function getData() {
    const { data } = await supabase.from("store").select('*');
    setProducts(data);
  }

  return (
    <MyProducts.Provider value={{products, setProducts}}>
      {children}
    </MyProducts.Provider>
  );
}

export default ContextProvider;
