import { atom } from "recoil";
import { SEARCHRECORD } from "../utils/constant";
import { localStorageEffect } from "./effects";

export const searchRecordState = atom<string[] | null>({
  key: "searchRecordState",
  default: null,
  effects: [localStorageEffect(SEARCHRECORD)],
});
