import React, { ChangeEvent } from "react";

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
