import React, { Children, ReactChild, ReactElement, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

import { PresentationProps } from "./Presentation.types";

const ChevronLeft = () => (
    <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
    </svg>
);

const ChevronRight = () => (
    <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
    </svg>
);

const ViewerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
`;

const NavButton = styled.button`
    all: unset;
    cursor: ${(props) => props.disabled ? null : 'pointer'};
    color: ${(props) => props.disabled ? '#999' : '#000'};
    opacity: ${(props) => props.disabled ? '50%' : '100%'};
    padding: 0.5rem;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 1px solid hsla(210, 18%, 87%, 1);
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.disabled ? null : 'hsla(210, 18%, 87%, 0.5)'};
    }
`;

const SlideCounter = styled.span`
    font-size: 1rem;
    color: #999;
`;

const CurrentSlide = styled.strong`
    color: #000;
`;

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
        <ViewerContainer>
            {arraySlides[slideIndex]}
            <ControlsContainer>
                <NavButton
                    disabled={slideIndex == 0}
                    onClick={() => setSlideIndex(slideIndex - 1)}
                    data-testid="previous-slide"
                >
                    <ChevronLeft />
                </NavButton>

                <SlideCounter>
                    <CurrentSlide>{slideIndex + 1}</CurrentSlide> of {arraySlides.length}
                </SlideCounter>

                <NavButton
                    disabled={slideIndex == arraySlides.length - 1}
                    onClick={() => setSlideIndex(slideIndex + 1)}
                    data-testid="next-slide"
                >
                    <ChevronRight />
                </NavButton>
            </ControlsContainer>
        </ViewerContainer>
    );
}

export default Presentation;
