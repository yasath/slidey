import React, { Children, type ReactChild, useState } from 'react';

import { AnimateProvider } from '../Animate/AnimateContext';
import { type PresentationProps } from './Presentation.types';
import Viewer from './Viewer';

const Presentation: React.FC<PresentationProps> = ({ children, showControls = true }) => {
    const arraySlides: ReactChild[] = Children.toArray(children).map((child: ReactChild) => child);
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <AnimateProvider>
            <Viewer arraySlides={arraySlides} slideIndex={slideIndex} setSlideIndex={setSlideIndex} showControls={showControls} />
        </AnimateProvider>
    );
};

export default Presentation;
