import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/ecom-service";
export const ApiContext = createContext(null);

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getAllProducts()
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
