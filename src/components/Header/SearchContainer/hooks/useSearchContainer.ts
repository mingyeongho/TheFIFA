import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { SEARCHUSER } from "../../../../utils/constant";
import Storage from "../../../../utils/Storage";

const useSearchContainer = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const getSavedUser = Storage.getStorage({ key: SEARCHUSER });
  const [savedUser, setSavedUser] = useState<string[] | null>(
    getSavedUser ? JSON.parse(getSavedUser) : null
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNickname("");
    navigate(`/user/${nickname}`);
  };

  const onFocus = () => {
    if (!popoverRef.current) {
      return;
    }
    popoverRef.current.style.display = "flex";
  };

  const onBlur = () => {
    setTimeout(() => {
      if (!popoverRef.current) {
        return;
      }
      popoverRef.current.style.display = "none";
      window.scrollY = 20;
    }, 100);
  };

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!savedUser) {
      return;
    }
    setSavedUser(savedUser.filter((user) => user !== e.currentTarget.id));
  };

  useEffect(() => {
    Storage.setStorage({ key: SEARCHUSER, value: JSON.stringify(savedUser) });
  }, [savedUser]);

  return {
    nickname,
    onChange,
    onSubmit,
    inputRef,
    popoverRef,
    onFocus,
    onBlur,
    savedUser,
    onRemove,
  };
};

export default useSearchContainer;
