import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSearchUser = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/user/${nickname}`);
  };

  const nicknameInputProps = {
    name: "nickname",
    value: nickname,
    placeholder: "구단주명을 입력해주세요.",
    label: "구단주명",
    onChange: onChangeNickname,
  };

  return { nicknameInputProps, onSearchUser };
};

export default useSearch;
