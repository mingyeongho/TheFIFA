import axios from "axios";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "../../styles/Record/_record.module.scss";
import { category, MatchType } from "../../utils/constants/constants";
import { RecordProps } from "../../utils/types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { MatchDTO, Nullable, TradeType } from "../../utils/types/type";
import dynamic from "next/dynamic";

const Match = dynamic(() => import("../Match/Match"));
const Trade = dynamic(() => import("../Trade/Trade"));

const Record = ({ user }: RecordProps) => {
  const { accessId } = user;
  const [currCategory, setCurrCategory] = useState({
    type: "match",
    subcategory: "50",
    offset: "0",
  });
  const { type, subcategory, offset } = currCategory;
  const [isLoading, setIsLoading] = useState(false);
  const [isShowOffset, setIsShowOffset] = useState(true);
  const [data, setData] = useState<Nullable<MatchDTO[] | TradeType[]>>(null);

  const conditionCategory = () => {
    const target = category.find((el) => el.type === type);
    if (target) {
      const { value } = target;
      return value.map((cur) => (
        <option key={cur.type} value={cur.type}>
          {cur.desc}
        </option>
      ));
    }
  };

  const onClickType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn: HTMLButtonElement = e.currentTarget;
    setCurrCategory((prev) => {
      return {
        ...prev,
        type: btn.value,
        subcategory: btn.value === "trade" ? "buy" : "50",
        offset: offset,
      };
    });
  };

  const onClickSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrCategory((prev) => {
      return {
        ...prev,
        subcategory: e.target.value,
        offset: "0",
      };
    });
  };

  const fetch = useCallback(async () => {
    setIsLoading((prev) => !prev);
    const res = await axios.get(
      `/api/get/record/record?type=${type}&id=${accessId}&category=${subcategory}&offset=${offset}`
    );
    setData(res.data);
    setIsLoading((prev) => !prev);
  }, [accessId, offset, subcategory, type]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch();
  };

  return (
    <div className={styles.record_wrapper}>
      <div className={styles.category_wrapper}>
        <div className={styles.type_selector}>
          <nav>
            {MatchType.map((cur, idx) => (
              <button
                key={idx}
                value={cur.type}
                className={type === cur.type ? styles.focus : ""}
                onClick={onClickType}
                type="button"
              >
                {cur.desc}
              </button>
            ))}
          </nav>
          <div className={styles.select_wrapper}>
            <select value={subcategory} onChange={onClickSelect}>
              {conditionCategory()}
            </select>
            <div className={styles.offset_btn}>
              <button
                type="button"
                aria-label="offsetBtn"
                onClick={() => setIsShowOffset((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
          </div>
        </div>
        {isShowOffset && (
          <div className={styles.offset}>
            <form onSubmit={onSubmit}>
              <label htmlFor="offset">?????? ??????:</label>
              <input
                type="number"
                id="offset"
                value={offset ?? 0}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCurrCategory((prev) => {
                    return { ...prev, offset: e.target.value };
                  })
                }
                min={0}
              />
              <span>~</span>
              <input
                type="text"
                disabled
                placeholder="maximum"
                value={offset ? parseInt(offset) + 30 : 30}
              />
              <button type="submit">??????</button>
            </form>
          </div>
        )}
      </div>
      <div className={styles.list_wrapper}>
        {!isLoading ? (
          data ? (
            data.map((cur, idx) => {
              if ((cur as MatchDTO).matchInfo) {
                return (
                  <Match
                    key={idx}
                    item={cur as MatchDTO}
                    accessId={accessId}
                  ></Match>
                );
              } else if ((cur as TradeType).saleSn) {
                return <Trade key={idx} item={cur as TradeType} />;
              }
            })
          ) : (
            <div>??????????????? ???????????????.</div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Record;
