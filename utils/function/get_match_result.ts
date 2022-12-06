const get_match_result = (matchResult: string, matchEndType: number) => {
  switch (matchEndType) {
    case 0:
      switch (matchResult) {
        case "승":
          return {
            result: "win",
            desc: "승리",
          };
        case "무":
          return {
            result: "draw",
            desc: "무승부",
          };
        default:
          return {
            result: "lose",
            desc: "패배",
          };
      }
    case 1:
      return {
        result: "win",
        desc: "몰수승",
      };
    default:
      return {
        result: "lose",
        desc: "몰수패",
      };
  }
};

export default get_match_result;
