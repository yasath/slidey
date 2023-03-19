import React, { Children, type ReactElement } from 'react';
import styled from 'styled-components';

import { type ColumnsProps, type ColumnProps } from './Columns.types';

const ColumnContainer = styled.div<{ number: number }>`
    display: grid;
    grid-template-columns: repeat(${({ number }) => number}, 1fr);
    column-gap: 2rem;
    margin: 1rem 0;
`;

const Columns: React.FC<ColumnsProps> = ({ number, children }) => {
    let arrayChildren = Children.toArray(children);
    if (arrayChildren.length === 0) {
        return (<></>);
    }

    const firstChildType = (arrayChildren[0] as ReactElement).type as string;
    if (['ul', 'ol'].includes(firstChildType)) {
        arrayChildren = Children.toArray((arrayChildren[0] as ReactElement).props.children);
    }

    return firstChildType === 'ol' ? (
        <ol>
            <ColumnContainer number={number} data-testid="column-container">
                {arrayChildren}
            </ColumnContainer>
        </ol>
    ) : (
        <ColumnContainer number={number} data-testid="column-container">
            {arrayChildren}
        </ColumnContainer>
    );
};

export default Columns;

export const Column = ({ children }: ColumnProps) => (
    <div>
        {children}
    </div>
);
