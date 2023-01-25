import React, { ChangeEvent } from "react";
import { User } from "./type";

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
