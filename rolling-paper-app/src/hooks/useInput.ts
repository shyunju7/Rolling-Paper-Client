import React, { useState } from "react";

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };
  return { value, onChange };
};
