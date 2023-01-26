import React, { ChangeEvent } from "react";
import { MatchDTO, User } from "./type";

export interface ShadowBoxProps {
  children: React.ReactNode;
}

export interface SearchProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProfileProps {
  user: User;
}

export interface RecordProps {
  user: User;
}

export interface MatchProps {
  accessId: string;
}

export interface TradeProps {
  accessId: string;
}

export interface MatchItemContainerProps {
  matchId: string;
  accessId: string;
}

export interface MatchItemProps {
  matchItem: MatchDTO;
  accessId: string;
}

export interface PlayerProps {
  nickname: string;
  goal: number;
  yelloCards: number;
  redCards: number;
  controller: string;
}
