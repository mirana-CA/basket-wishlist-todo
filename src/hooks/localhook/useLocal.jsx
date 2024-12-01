import React, { useEffect, useState } from "react";

const useLocal = (name, inherit) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(name)) ?? inherit
  );
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
    setValue(value);
  }, [value]);

  return [value, setValue];
};

export default useLocal;
