import React from "react";
import styled from "styled-components";

import { ColumnsProps, ColumnProps } from "./Columns.types";

const ColumnContainer = styled.div<{ number: number }>`
    display: grid;
    grid-template-columns: repeat(${({ number }) => number}, 1fr);
    column-gap: 2rem;
    margin: 1rem 0;
`;

const Columns: React.FC<ColumnsProps> = ({ number, children }) => (
    <ColumnContainer number={number} data-testid="column-container">
        {children}
    </ColumnContainer>
);

export default Columns;

export const Column = ({ children }: ColumnProps) => (
    <div>
        {children}
    </div>
);
