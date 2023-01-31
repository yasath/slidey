import React, { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useEffect, useState } from 'react';

type AnimateState = { element: MutableRefObject<any>, shown: boolean }[];

export const AnimateContext = createContext<{ animateState: AnimateState, setAnimateState: Dispatch<SetStateAction<AnimateState>> }>({ animateState: [], setAnimateState: () => { } });

export const AnimateProvider = ({ children }: { children: ReactNode }) => {
    const [animateState, setAnimateState] = useState<AnimateState>([]);

    useEffect(() => {
        console.log(animateState);
    }, [animateState]);

    return (
        <AnimateContext.Provider value={{ animateState, setAnimateState }}>
            {children}
        </AnimateContext.Provider>
    );
}
