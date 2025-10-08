import axios from "axios";
import { useEffect, useState } from "react";

const useHook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios("/Apps.json")
      .then((data) => setProducts(data.data))
      .catch((err) => seterror(err))
      .finally(() => setLoading(false));
  }, []);
  return { products, loading, error };
};
export default useHook;
