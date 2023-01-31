import React, { Children, ReactChild, useEffect, useState } from "react";

import { PresentationProps } from "./Presentation.types";
import { AnimateProvider } from "../Animate/AnimateContext";
import Viewer from "./Viewer";

const Presentation: React.FC<PresentationProps> = ({ children }) => {
    const arraySlides: ReactChild[] = Children.toArray(children).map((child: ReactChild) => child);
    const [slideIndex, setSlideIndex] = useState(0);

    const keyHandler = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        }
        if ((e.key === 'ArrowRight' || e.key === ' ') && slideIndex !== arraySlides.length - 1) {
            setSlideIndex(slideIndex + 1);
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', keyHandler, false);
        return () => window.removeEventListener('keydown', keyHandler, false);
    }, [slideIndex]);

    return (
        <AnimateProvider>
            <Viewer arraySlides={arraySlides} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        </AnimateProvider>
    );
}

export default Presentation;
