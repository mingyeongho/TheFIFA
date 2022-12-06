import styles from "../../styles/Match/_match.module.scss";
import get_category_desc from "../../utils/function/get_category_desc";
import get_match_result from "../../utils/function/get_match_result";
import get_match_target from "../../utils/function/get_match_target";
import time_diff from "../../utils/function/time_diff";
import { MatchProps } from "../../utils/types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import get_goal_player from "../../utils/function/get_goal_player";

const Match = ({ item, accessId }: MatchProps) => {
  const { matchDate, matchInfo, matchType, matchId } = item;
  const [home, away] = matchInfo;
  const category = get_category_desc(matchType.toString());
  const target = get_match_target(matchInfo, accessId);
  const { matchDetail } = target;
  const { matchResult, matchEndType } = matchDetail;

  const matchResultObj = get_match_result(matchResult, matchEndType);

  return (
    <div className={styles.match}>
      <div className={`${styles.match_type} ${styles[matchResultObj.result]}`}>
        <div className={styles.type_result}>
          <span>{category}</span>
          <span>{matchResultObj.desc}</span>
        </div>
        <div>{time_diff(matchDate)}</div>
      </div>
      <div
        className={`${styles.match_summary} ${styles[matchResultObj.result]}`}
      >
        <div className={`${styles.team} ${styles.home}`}>
          <div className={styles.score}>
            <span className={styles.nickname}>{home.nickname}</span>
            <span>{home.shoot.goalTotalDisplay}</span>
          </div>
          <div className={styles.goal_list}>
            {get_goal_player(
              home.shootDetail.filter((cur, idx) => {
                const { result } = cur;
                return result === 3 ? true : false;
              })
            ).map((cur, idx) => {
              const { name, season } = cur;
              return (
                <div key={idx}>
                  <span>{season}</span>
                  <span>{name}</span>
                  <FontAwesomeIcon icon={faFutbol} />
                </div>
              );
            })}
          </div>
        </div>
        <span>vs</span>
        <div className={`${styles.team} ${styles.away}`}>
          <div className={styles.score}>
            <span>{away.shoot.goalTotalDisplay}</span>
            <span
              className={`${styles.nickname} ${
                away.nickname.length > 6 && styles.long
              }`}
            >
              {away.nickname}
            </span>
          </div>
          <div className={styles.goal_list}>
            {get_goal_player(
              away.shootDetail.filter((cur, idx) => {
                const { result } = cur;
                return result === 3 ? true : false;
              })
            ).map((cur, idx) => {
              const { name, season } = cur;
              return (
                <div key={idx} className={styles.player}>
                  <span>{season}</span>
                  <span>{name}</span>
                  <FontAwesomeIcon icon={faFutbol} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
