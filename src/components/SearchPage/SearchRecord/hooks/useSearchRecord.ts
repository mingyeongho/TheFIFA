import React from "react";
import { useRecoilState } from "recoil";
import { searchRecordState } from "../../../../recoil/atom";

const useSearchRecord = () => {
  const [searchRecord, setSearchRecord] = useRecoilState(searchRecordState);

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

  return { searchRecord, onRemove };
};

export default useSearchRecord;
