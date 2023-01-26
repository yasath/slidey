import React from "react";
import styled from "styled-components";

import { SlideProps } from "./Slide.types";

const SlideContainer = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 48px;
`;

const SlideTitle = styled.h1<{ subtitleExists: boolean }>`
    font-size: 64px;
    padding-bottom: ${p => (p.subtitleExists ? 24 : 0)}px;
    font-weight: 500;
`

const SlideSubtitle = styled.h2`
    font-size: 32px;
    color: #888888;
    padding-bottom: 24px;
    font-weight: 400;
`

const Slide: React.FC<SlideProps> = ({ title, subtitle, children }) => (
    <SlideContainer>
        <SlideTitle subtitleExists={!subtitle}>{title}</SlideTitle>
        {subtitle && (
            <SlideSubtitle>{subtitle}</SlideSubtitle>
        )}
        {children}
    </SlideContainer>
);

export default Slide;
