import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNickname("");
    navigate(`/user/${nickname}`);
  };

  return { nickname, onChange, onSubmit };
};

export default useHeader;
