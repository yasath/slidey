import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import { PresentationProps } from "./Presentation.types";

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
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <ViewerContainer>
            {children[slideIndex]}
            <ControlsContainer>
                <NavButton
                    disabled={slideIndex == 0}
                    onClick={() => setSlideIndex(slideIndex - 1)}
                    data-testid="previous-slide"
                >
                    <HiOutlineChevronLeft />
                </NavButton>

                <SlideCounter>
                    <CurrentSlide>{slideIndex + 1}</CurrentSlide> of {children.length}
                </SlideCounter>

                <NavButton
                    disabled={slideIndex == children.length - 1}
                    onClick={() => setSlideIndex(slideIndex + 1)}
                    data-testid="next-slide"
                >
                    <HiOutlineChevronRight />
                </NavButton>
            </ControlsContainer>
        </ViewerContainer>
    );
}

export default Presentation;
