import React from "react";
import styled from "styled-components";

import { TestComponentProps } from "./TestComponent.types";

const StyledDiv = styled.div`
  background-color: grey;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: 32px;
`;

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
    <StyledDiv data-testid="test-component">
        <StyledHeading data-testid="test-component__heading">{heading}</StyledHeading>
        <div data-testid="test-component__content">
            {content}
        </div>
    </StyledDiv>
);

export default TestComponent;
