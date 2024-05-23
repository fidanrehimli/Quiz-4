import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilterData] = useState([]);
  const [active, setActive] = useState(null);
  const [sortData, setSortData] = useState([]);
  const [imgInp, setImgInp] = useState("");
  const [titleInp, setTitleInp] = useState("");
  const [paragInp, setParagInp] = useState("");
  const [priceInp, setPriceInp] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        filter,
        setFilterData,
        active,
        setActive,
        sortData,
        setSortData,
        imgInp,
        setImgInp,
        titleInp,
        setTitleInp,
        paragInp,
        setParagInp,
        priceInp,
        setPriceInp,
      }}
    >
      {children}

    </ProductsContext.Provider>
  );
};
