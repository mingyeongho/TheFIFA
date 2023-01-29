import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY, API_URL, SEARCHUSER } from "../../../utils/constant";
import Storage from "../../../utils/Storage";
import { User } from "../../../utils/type";

const useUserPage = (nickname: string) => {
  const { data, isError } = useQuery<User>({
    queryKey: ["getExistUser", nickname],
    queryFn: () =>
      axios
        .get(API_URL.getUser(nickname), {
          headers: { Authorization: API_KEY },
        })
        .then((res) => res.data),
    onSuccess: (res) => {
      const getSavedUser = Storage.getStorage({ key: SEARCHUSER });
      const { nickname } = res;

      // getSavedUser: 이미 검색 기록이 존재하는지 확인
      if (getSavedUser) {
        let arrSavedUser: string[] = JSON.parse(getSavedUser);

        // 이미 목록에 존재하면 존재하는 유저를 지운다.
        if (arrSavedUser.includes(nickname)) {
          arrSavedUser.splice(arrSavedUser.indexOf(nickname), 1);
        }

        // 맨 앞에 추가
        arrSavedUser.unshift(nickname);

        Storage.setStorage({
          key: SEARCHUSER,
          value: JSON.stringify(arrSavedUser),
        });
      } else {
        Storage.setStorage({
          key: SEARCHUSER,
          value: JSON.stringify([nickname]),
        });
      }
    },
  });

  return { data, isError };
};

export default useUserPage;
