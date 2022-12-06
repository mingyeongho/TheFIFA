import { MatchDTO, TradeType, User } from "./type";

export interface PanelProps {
  title: string;
  children: JSX.Element;
}

export interface ProfileProps {
  user: User;
}
export interface RecordProps {
  user: User;
}

export interface TradeProps {
  item: TradeType;
  subcategory: string;
}

export interface MatchProps {
  item: MatchDTO;
  accessId: string;
}
