import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { API_KEY, API_URL } from "../../../../../utils/constant";

const useTrade = (accessId: string) => {
  const [type, setType] = useState<"buy" | "sell">("sell");

  const { data } = useQuery({
    queryKey: ["getTradeList", type, accessId],
    queryFn: () =>
      axios.get(
        API_URL.getTradeRecord({ accessid: accessId, tradetype: type }),
        { headers: { Authorization: API_KEY } }
      ),
    suspense: true,
  });

  return { type, setType, data };
};

export default useTrade;
