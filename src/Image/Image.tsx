import React from "react";
import styled from "styled-components";

import { ImageProps } from "./Image.types";

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img<{ width?: number, rounded?: boolean }>`
    width: ${props => props.width ? props.width + '%' : '50%'};
    border-radius: ${props => props.rounded ? '8px' : '0px'};
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, rounded }) => (
    <ImageContainer>
        <Img width={width} rounded={rounded} src={src} alt={alt || ''} data-testid="image" />
    </ImageContainer>
);

export default Image;
