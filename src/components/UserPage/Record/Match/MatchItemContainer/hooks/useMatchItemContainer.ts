import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY, API_URL } from "../../../../../../utils/constant";
import { MatchDTO } from "../../../../../../utils/type";

const useMatchItemContainer = (matchId: string) => {
  const { isLoading, data } = useQuery<MatchDTO>({
    queryKey: ["getMatchItem", matchId],
    queryFn: () =>
      axios
        .get(API_URL.getMatchItem(matchId), {
          headers: { Authorization: API_KEY },
        })
        .then((res) => res.data),
    suspense: true,
  });

  return { isLoading, data };
};

export default useMatchItemContainer;
