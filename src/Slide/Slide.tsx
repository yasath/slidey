import React from "react";
import styled from "styled-components";

import "../github-markdown-light.css";

import { SlideProps } from "./Slide.types";

const SlideContainer = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    border: 1px solid hsla(210, 18%, 87%, 1);
    border-radius: 0.5rem;
    padding: 48px;
    overflow: scroll;
`;

const Slide: React.FC<SlideProps> = ({ title, subtitle, children }) => (
    <SlideContainer className="markdown-body">
        {title && (
            <h1>{title}</h1>
        )}
        {subtitle && (
            <h3>{subtitle}</h3>
        )}
        {children}
    </SlideContainer>
);

export default Slide;
