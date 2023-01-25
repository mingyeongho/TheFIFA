import { Link, useSearchParams } from "react-router-dom";
import * as S from "./RecordNav.style";

const Navs = [
  {
    desc: "매치 기록",
    path: `?`,
    type: null,
  },
  {
    desc: "거래 기록",
    path: "?record=trade",
    type: "trade",
  },
];

const RecordNav = () => {
  const record = useSearchParams()[0].get("record");

  return (
    <S.RecordNav>
      {Navs.map((nav, idx) => (
        <Link
          key={idx}
          to={nav.path}
          children={nav.desc}
          className={record === nav.type ? "focus" : undefined}
        />
      ))}
    </S.RecordNav>
  );
};

export default RecordNav;
