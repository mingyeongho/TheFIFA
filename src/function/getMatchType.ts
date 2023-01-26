import jsonMatchType from "../json/jsonMatchType.json";

const getMatchType = (matchtype: number) => {
  return jsonMatchType.find((type) => type.matchtype === matchtype)!.desc;
};

export default getMatchType;
