import React, { Dispatch, ReactChild, SetStateAction, useContext, useEffect, useState } from "react";

import styled from "styled-components";

import { AnimateContext } from "../Animate/AnimateContext";

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

const HiddenContainer = styled.div`
    display: contents;
`;

interface ViewerProps {
    arraySlides: ReactChild[];
    slideIndex: number;
    setSlideIndex: Dispatch<SetStateAction<number>>;
    showControls: boolean;
}

const Viewer = ({ arraySlides, slideIndex, setSlideIndex, showControls }: ViewerProps) => {
    const { animateState, setAnimateState } = useContext(AnimateContext);
    const [shouldShowAll, setShouldShowAll] = useState(false);

    useEffect(() => {
        if (shouldShowAll && animateState.filter((item) => item.element.current).length > 0) {
            setAnimateState((animateState) => {
                const newState = [...animateState];
                newState.forEach((item) => item.shown = true);
                return newState;
            });
            setShouldShowAll(false);
        }
    }, [shouldShowAll, animateState]);
    const goLeft = () => {
        if (animateState.filter((item) => item.shown).length === 0) {
            setSlideIndex((slideIndex) => slideIndex - 1);
            setShouldShowAll(true);
        } else {
            const mostRecentElement = animateState.slice().reverse().findIndex((item) => item.shown);
            setAnimateState((animateState) => {
                const newState = [...animateState];
                newState[animateState.length - 1 - mostRecentElement].shown = false;
                return newState;
            });
        }
    };
    const goRight = () => {
        if (animateState.filter((item) => !item.shown).length === 0) {
            setSlideIndex((slideIndex) => slideIndex + 1);
        } else {
            const nextElement = animateState.findIndex((item) => !item.shown);
            setAnimateState((animateState) => {
                const newState = [...animateState];
                newState[nextElement].shown = true;
                return newState;
            });
        }
    };

    const cannotGoLeft = () => animateState.filter((item) => item.shown).length === 0 && slideIndex === 0;
    const cannotGoRight = () => animateState.filter((item) => !item.shown).length === 0 && slideIndex === arraySlides.length - 1;
    const keyHandler = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && !cannotGoLeft()) {
            goLeft();
        }
        if ((e.key === 'ArrowRight' || e.key === ' ') && !cannotGoRight()) {
            goRight();
        }
    };
    const clickHandler = () => {
        if (!cannotGoRight()) {
            goRight();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', keyHandler, false);
        return () => window.removeEventListener('keydown', keyHandler, false);
    }, [keyHandler]);

    return (
        <ViewerContainer>
            <HiddenContainer onClick={clickHandler} data-testid="current-slide">
                {arraySlides[slideIndex]}
            </HiddenContainer>
            {showControls && (
                <ControlsContainer>
                    <NavButton
                        disabled={cannotGoLeft()}
                        onClick={goLeft}
                        data-testid="previous-slide"
                    >
                        <ChevronLeft />
                    </NavButton>

                    <SlideCounter>
                        <CurrentSlide>{slideIndex + 1}</CurrentSlide> of {arraySlides.length}
                    </SlideCounter>

                    <NavButton
                        disabled={cannotGoRight()}
                        onClick={goRight}
                        data-testid="next-slide"
                    >
                        <ChevronRight />
                    </NavButton>
                </ControlsContainer>
            )}
        </ViewerContainer>
    )
}

export default Viewer;
