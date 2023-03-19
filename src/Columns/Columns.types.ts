import { type ReactNode } from 'react';

export type ColumnsProps = {
    number: number;
    children: ReactNode | ReactNode[];
};

export type ColumnProps = {
    children: ReactNode | ReactNode[];
};
