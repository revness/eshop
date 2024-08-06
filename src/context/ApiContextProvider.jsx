import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/ecom-service";
import { getSessionId } from "../services/session-utils.js";
export const ApiContext = createContext(null);

const ApiContextProvider = ({ children }) => {
  //get data from services, and pass to children

  const [data, setData] = useState();

  useEffect(() => {
    const sessionId = getSessionId();
    console.log("Session ID:", sessionId);
  }, []);
  useEffect(() => {
    getAllProducts()
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
