import React, { createContext, type Dispatch, type MutableRefObject, type ReactNode, type SetStateAction, useState, useMemo } from 'react';

type AnimateState = Array<{ element: MutableRefObject<HTMLSpanElement>; shown: boolean }>;

export const AnimateContext = createContext<{
    animateState: AnimateState; setAnimateState: Dispatch<SetStateAction<AnimateState>>; inContext: boolean;
}>(
    { animateState: [], setAnimateState() { }, inContext: false },
);

export const AnimateProvider = ({ children }: { children: ReactNode }) => {
    const [animateState, setAnimateState] = useState<AnimateState>([]);
    const contextValues = useMemo(() => ({ animateState, setAnimateState, inContext: true }), [animateState]);

    return (
        <AnimateContext.Provider value={contextValues}>
            {children}
        </AnimateContext.Provider>
    );
};
