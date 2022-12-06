import { category } from "../constants/constants";
import matchTypeJson from "../json/matchType.json";

const get_category_desc = (category: string) => {
  switch (category) {
    case "sell":
      return "판매";
    case "buy":
      return "구매";
    default:
      return matchTypeJson.find((el) => el.type.toString() === category)?.desc;
  }
};

export default get_category_desc;
