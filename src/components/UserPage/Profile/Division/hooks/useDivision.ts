import jsonMatchType from "../../../../../json/jsonMatchType.json";
import jsonDivision from "../../../../../json/division.json";
import jsonDivisionVolta from "../../../../../json/divisionVolta.json";

const useDivision = ({
  matchType,
  division,
}: {
  matchType: number;
  division: number;
}) => {
  const desc = jsonMatchType.find((type) => type.matchtype === matchType)!.desc;
  const rank =
    matchType === 214
      ? jsonDivisionVolta.find((d) => d.divisionId === division)!.divisionName
      : jsonDivision.find((d) => d.divisionId === division)!.divisionName;

  return { desc, rank };
};

export default useDivision;
