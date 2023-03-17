import React from "react";
import styled from "styled-components";

import "../github-markdown-light.css";
import "../github-markdown-dark.css";

import { SlideProps } from "./Slide.types";

const SlideContainer = styled.div<{ dark?: boolean, centre?: boolean }>`
    width: 100%;
    aspect-ratio: 16/9;
    border: 1px solid ${props => props.dark ? '#21262d' : 'hsla(210, 18%, 87%, 1)'};
    border-radius: 0.5rem;
    padding: 48px;
    overflow: scroll;
    text-align: ${props => props.centre && 'center'};
    display: ${props => props.centre && 'flex'};
    flex-direction: ${props => props.centre && 'column'};
    align-items: ${props => props.centre && 'center'};
    justify-content: ${props => props.centre && 'center'};
`;

const Subtitle = styled.h3<{ dark?: boolean }>`
    color: ${props => props.dark ? '#8b949e' : '#57606a'};
    margin-top: -4px !important;
    margin-bottom: 24px !important;
    font-weight: 500 !important;
`;

const Slide: React.FC<SlideProps> = ({ title, subtitle, dark, centre, children }) => (
    <SlideContainer
        dark={dark}
        className={dark ? 'markdown-body-dark' : 'markdown-body'}
        centre={centre}
    >
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
