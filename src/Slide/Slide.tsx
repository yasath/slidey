import React from "react";
import styled from "styled-components";

import "../github-markdown-light.css";
import "../github-markdown-dark.css";

import { SlideProps } from "./Slide.types";

const SlideContainer = styled.div<{ dark?: boolean }>`
    width: 100%;
    aspect-ratio: 16/9;
    border: 1px solid ${props => props.dark ? '#21262d' : 'hsla(210, 18%, 87%, 1)'};
    border-radius: 0.5rem;
    padding: 48px;
    overflow: scroll;
`;

const Subtitle = styled.h3<{ dark?: boolean }>`
    color: ${props => props.dark ? '#8b949e' : '#57606a'};
    margin-top: -4px !important;
    margin-bottom: 24px !important;
    font-weight: 500 !important;
`;

const Slide: React.FC<SlideProps> = ({ title, subtitle, dark, children }) => (
    <SlideContainer dark={dark} className={dark ? 'markdown-body-dark' : 'markdown-body'}>
        {title && (
            <h1>{title}</h1>
        )}
        {subtitle && (
            <Subtitle dark={dark}>{subtitle}</Subtitle>
        )}
        {children}
    </SlideContainer>
);

export default Slide;
