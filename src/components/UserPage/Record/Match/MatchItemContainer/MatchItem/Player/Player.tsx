import { PlayerProps } from "../../../../../../../utils/interface";
import * as S from "./Player.style";

const Player = ({
  controller,
  goal,
  nickname,
  redCards,
  yelloCards,
}: PlayerProps) => {
  const getContorllerEmoji = () => {
    switch (controller) {
      case "keyboard":
        return `⌨`;
      case "gamepad":
        return `🎮`;
      default:
        return `⚒️`;
    }
  };

  return (
    <S.Player>
      <S.Controller children={getContorllerEmoji()} />
      <S.Nickname children={nickname} />
      <S.CardsAndGoal children={`🟥 ${redCards} 🟨 ${yelloCards} ⚽ ${goal}`} />
    </S.Player>
  );
};

export default Player;
