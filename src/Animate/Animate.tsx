/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Children, type MutableRefObject, type ReactElement, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { type AnimateProps } from './Animate.types';
import { AnimateContext } from './AnimateContext';

const AnimateSpan = styled.span<{ shown: boolean }>`
    transition: all 0.1s ease-in-out;
    opacity: ${props => props.shown ? '100%' : '0%'};
    visibility: ${props => props.shown ? 'visible' : 'hidden'};
`;

const Animate: React.FC<AnimateProps> = ({ children }) => {
    const { animateState, setAnimateState, inContext } = useContext(AnimateContext);
    const [shownArray, setShownArray] = useState<boolean[]>([]);

    let arrayChildren = Children.toArray(children);
    if (arrayChildren.length === 0) {
        return (<></>);
    }

    const childRefs: Array<MutableRefObject<HTMLSpanElement>> = [];
    if (['ul', 'ol'].includes((arrayChildren[0] as ReactElement).type as string)) {
        arrayChildren = Children.toArray((arrayChildren[0] as ReactElement).props.children);
    }

    arrayChildren = arrayChildren.filter(child => (child as ReactElement).props && (child as ReactElement).props.children);
    // eslint-disable-next-line unicorn/no-array-for-each
    arrayChildren.forEach(() => childRefs.push(useRef()));

    useEffect(() => {
        for (const ref of childRefs) {
            setShownArray(shownArray => [...shownArray, false]);
            setAnimateState(animateState => [...animateState, { element: ref, shown: false }]);
        }

        return () => {
            for (const ref of childRefs) {
                setAnimateState(animateState => animateState.filter(item => item.element !== ref));
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        for (const ref of childRefs) {
            const found = animateState.find(item => item.element === ref);
            if (found) {
                setShownArray(shownArray => {
                    const newArray = [...shownArray];
                    newArray[childRefs.indexOf(ref)] = found.shown;
                    return newArray;
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animateState]);

    return (
        <>
            {arrayChildren.map((child, index) =>
                inContext ? (
                    <AnimateSpan ref={childRefs[index]} key={index} shown={shownArray[index]}>
                        {child}
                    </AnimateSpan>
                ) : (
                    <span key={index}>
                        {child}
                    </span>
                ),
            )}
        </>
    );
};

export default Animate;
