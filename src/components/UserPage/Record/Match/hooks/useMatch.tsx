import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../../../../utils/constant";

const useMatch = (accessId: string) => {
  const [type, setType] = useState(50);

  const { isLoading, data } = useQuery({
    queryKey: ["getMatchList", type, accessId],
    queryFn: () =>
      axios.get(
        API_URL.getMatchRecord({
          accessid: accessId,
          matchtype: type.toString(),
        }),
        { headers: { Authorization: API_KEY } }
      ),
  });

  return { type, setType, isLoading, data };
};

export default useMatch;
