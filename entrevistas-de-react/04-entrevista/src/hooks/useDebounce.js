//importaciones
import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  //variables de estado
  const [debouncedValue, setDebouncedValue] = useState(value);

  //useEffect
  useEffect(() => {
    //setTimeout del valor
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
