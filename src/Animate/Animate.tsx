import React, { useContext, useEffect, useRef, useState } from "react";

import { AnimateProps } from "./Animate.types";
import { AnimateContext } from "./AnimateContext";

const Animate: React.FC<AnimateProps> = ({ children }) => {
    const { animateState, setAnimateState } = useContext(AnimateContext);
    const [shown, setShown] = useState(false);
    const ref = useRef();

    useEffect(() => {
        setAnimateState([...animateState, { element: ref, shown: false }]);
    }, []);

    useEffect(() => {
        const found = animateState.find((item) => item.element === ref);
        if (found) {
            setShown(found.shown);
        }
    }, [animateState]);

    return (
        <span ref={ref} style={{ opacity: shown ? '100%' : '0%' }}>
            {children}
        </span>
    );
}

export default Animate;
