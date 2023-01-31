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

const Subtitle = styled.h3`
    color: #57606a;
    margin-top: -4px !important;
    margin-bottom: 24px !important;
    font-weight: 500 !important;
`;

const Slide: React.FC<SlideProps> = ({ title, subtitle, children }) => (
    <SlideContainer className="markdown-body">
        {title && (
            <h1>{title}</h1>
        )}
        {subtitle && (
            <Subtitle>{subtitle}</Subtitle>
        )}
        {children}
    </SlideContainer>
);

export default Slide;
