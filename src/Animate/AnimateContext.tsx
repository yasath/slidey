import React, { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useEffect, useState } from 'react';

type AnimateState = { element: MutableRefObject<HTMLSpanElement>, shown: boolean }[];

export const AnimateContext = createContext<{ animateState: AnimateState, setAnimateState: Dispatch<SetStateAction<AnimateState>>, inContext: boolean }>({ animateState: [], setAnimateState: () => { }, inContext: false });

export const AnimateProvider = ({ children }: { children: ReactNode }) => {
    const [animateState, setAnimateState] = useState<AnimateState>([]);

    useEffect(() => {
        try {
            setAnimateState((animateState) => animateState.filter((item) => item.element.current.innerHTML.trim().length > 0));
        } catch (e) { }
    }, [animateState]);

    return (
        <AnimateContext.Provider value={{ animateState, setAnimateState, inContext: true }}>
            {children}
        </AnimateContext.Provider>
    );
}
