import divisionJson from "../json/division.json";

const get_rank_img = (matchType: number, division: number) => {
  const target = divisionJson.find((el) => el.divisionId === division);
  if (target) {
    return matchType === 50
      ? { src: target.divisionImageOffical, alt: target.divisionName }
      : { src: target.divisionImageManager, alt: target.divisionName };
  } else {
    return { src: "/imgs/rank/rank_default.png", alt: "default" };
  }
};

export default get_rank_img;
