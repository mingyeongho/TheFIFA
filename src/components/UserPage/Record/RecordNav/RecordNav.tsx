import { Link } from "react-router-dom";
import * as S from "./RecordNav.style";

const Navs = [
  {
    desc: "매치 기록",
    path: `?`,
  },
  {
    desc: "거래 기록",
    path: "?record=trade",
  },
];

const RecordNav = () => {
  return (
    <S.RecordNav>
      {Navs.map((nav, idx) => (
        <Link key={idx} to={nav.path} children={nav.desc} />
      ))}
    </S.RecordNav>
  );
};

export default RecordNav;
