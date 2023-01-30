import React, { ChangeEvent } from "react";
import { MatchDTO, TradeDTO, User } from "./type";

export interface ShadowBoxProps {
  children: React.ReactNode;
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

export interface TradeItemProps {
  tradeItem: TradeDTO;
  type: "buy" | "sell";
}
