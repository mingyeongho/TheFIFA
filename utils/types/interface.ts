import { User } from "./type";

export interface PanelProps {
  title: string;
  children: JSX.Element;
}

export interface ProfileProps {
  user: User;
}
