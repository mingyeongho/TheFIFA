import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchRecordState } from "../../../../recoil/atom";
import { SEARCHRECORD } from "../../../../utils/constant";
import Storage from "../../../../utils/Storage";

const useSearch = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [searchRecord, setSearchRecord] = useRecoilState(searchRecordState);

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
    const id = e.currentTarget.id;
    setSearchRecord((prev) => {
      if (!prev) {
        return prev;
      }

      const newSearchRecord = [...prev];
      newSearchRecord.splice(prev.indexOf(id), 1);
      return newSearchRecord;
    });
  };

  const nicknameInputProps = {
    value: nickname,
    placeholder: "구단주명",
    onChange,
    ref: inputRef,
    onFocus,
    onBlur,
  };

  const searchButtonProps = {
    children: "검색",
    onSubmit,
  };

  return {
    nicknameInputProps,
    searchButtonProps,
    searchRecord,
    popoverRef,
    onRemove,
  };
};

export default useSearch;
