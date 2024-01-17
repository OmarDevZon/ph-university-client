import { ReactNode } from "react";

export type TRouts = {
  path: string;
  element: ReactNode;
};

export type TPaths = {
  key: string;
  label: ReactNode;
  children?: object;
};

export type TIteams = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TIteams[];
};
