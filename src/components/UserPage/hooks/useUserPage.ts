import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { searchRecordState } from "../../../recoil/atom";
import { API_KEY, API_URL } from "../../../utils/constant";
import { User } from "../../../utils/type";

const useUserPage = (nickname: string) => {
  const setSearchRecord = useSetRecoilState(searchRecordState);
  const { data, isError } = useQuery<User>({
    queryKey: ["getExistUser", nickname],
    queryFn: () =>
      axios
        .get(API_URL.getUser(nickname), {
          headers: { Authorization: API_KEY },
        })
        .then((res) => res.data),
    onSuccess: (res) => {
      setSearchRecord((prev) => {
        if (!prev) {
          return [res.nickname];
        }

        const newSearchRecord = [...prev];
        if (newSearchRecord.includes(res.nickname)) {
          newSearchRecord.splice(newSearchRecord.indexOf(res.nickname), 1);
        }
        newSearchRecord.splice(0, 0, res.nickname);
        return newSearchRecord;
      });
    },
  });

  return { data, isError };
};

export default useUserPage;
