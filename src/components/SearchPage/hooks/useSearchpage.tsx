import { ChangeEvent, useState } from "react";

const useSearchpage = () => {
  const [name, setName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return { name, onChange };
};

export default useSearchpage;
