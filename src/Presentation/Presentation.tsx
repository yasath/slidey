import React, { Children, ReactChild, useState } from "react";

import { PresentationProps } from "./Presentation.types";
import { AnimateProvider } from "../Animate/AnimateContext";
import Viewer from "./Viewer";

const Presentation: React.FC<PresentationProps> = ({ children }) => {
    const arraySlides: ReactChild[] = Children.toArray(children).map((child: ReactChild) => child);
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <AnimateProvider>
            <Viewer arraySlides={arraySlides} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        </AnimateProvider>
    );
}

export default Presentation;
