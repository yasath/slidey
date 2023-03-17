import { ReactNode } from "react";

export interface ColumnsProps {
    number: number;
    children: ReactNode | ReactNode[];
}

export interface ColumnProps {
    children: ReactNode | ReactNode[];
}
