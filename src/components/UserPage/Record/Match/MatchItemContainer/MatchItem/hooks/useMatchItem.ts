import { MatchDTO } from "../../../../../../../utils/type";

const useMatchItem = (matchItem: MatchDTO, accessId: string) => {
  const { matchInfo } = matchItem;
  const own = matchInfo.find((player) => player.accessId === accessId)!;
  const [player1, player2] = matchInfo;

  const [endType, result] = [
    own.matchDetail.matchEndType,
    own.matchDetail.matchResult,
  ];

  const ResultType: {
    승: "win";
    무: "draw";
    패: "lose";
    몰수승: "win";
    몰수패: "lose";
  } = {
    승: "win",
    무: "draw",
    패: "lose",
    몰수승: "win",
    몰수패: "lose",
  };

  const getResult = (): { desc: string; type: "win" | "lose" | "draw" } => {
    switch (endType) {
      case 0:
        return { desc: result, type: ResultType[result] };
      case 1:
        return { desc: "몰수승", type: ResultType.몰수승 };
      default:
        return { desc: "몰수패", type: ResultType.몰수패 };
    }
  };

  return { player1, player2, getResult };
};

export default useMatchItem;
