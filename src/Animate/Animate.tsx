import React, { Children, MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { AnimateProps } from "./Animate.types";
import { AnimateContext } from "./AnimateContext";

const AnimateSpan = styled.span<{ shown: boolean }>`
    transition: all 0.1s ease-in-out;
    opacity: ${(props) => props.shown ? '100%' : '0%'};
`;

const Animate: React.FC<AnimateProps> = ({ children }) => {
    const { animateState, setAnimateState } = useContext(AnimateContext);
    const [shownArray, setShownArray] = useState<boolean[]>([]);

    const arrayChildren = Children.toArray(children);
    const childRefs: MutableRefObject<HTMLSpanElement>[] = [];
    arrayChildren.forEach(() => childRefs.push(useRef()));

    useEffect(() => {
        childRefs.forEach((ref) => {
            setShownArray((shownArray) => [...shownArray, false]);
            setAnimateState((animateState) => [...animateState, { element: ref, shown: false }]);
        })

        return () => {
            childRefs.forEach((ref) => {
                setAnimateState((animateState) => animateState.filter((item) => item.element !== ref));
            });
        }
    }, []);

    useEffect(() => {
        childRefs.forEach((ref) => {
            const found = animateState.find((item) => item.element === ref);
            if (found) {
                setShownArray((shownArray) => {
                    const newArray = [...shownArray];
                    newArray[childRefs.indexOf(ref)] = found.shown;
                    return newArray;
                });
            }
        });
    }, [animateState]);

    return (
        <>
            {arrayChildren.map((child, index) => (
                <AnimateSpan ref={childRefs[index]} shown={shownArray[index]} key={index}>
                    {child}
                </AnimateSpan>
            ))}
        </>
    );
}

export default Animate;
