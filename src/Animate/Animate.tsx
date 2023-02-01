import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { AnimateProps } from "./Animate.types";
import { AnimateContext } from "./AnimateContext";

const AnimateSpan = styled.span<{ shown: boolean }>`
    transition: all 0.1s ease-in-out;
    opacity: ${(props) => props.shown ? '100%' : '0%'};
`;

const Animate: React.FC<AnimateProps> = ({ children }) => {
    const { animateState, setAnimateState } = useContext(AnimateContext);
    const [shown, setShown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        setAnimateState((animateState) => [...animateState, { element: ref, shown: false }]);
    }, []);

    useEffect(() => {
        const found = animateState.find((item) => item.element === ref);
        if (found) {
            setShown(found.shown);
        }
    }, [animateState]);

    return (
        <AnimateSpan ref={ref} shown={shown}>
            {children}
        </AnimateSpan>
    );
}

export default Animate;
