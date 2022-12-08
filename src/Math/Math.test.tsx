import React from "react";
import { render } from "@testing-library/react";

import Math from "./Math";
import { MathProps } from "./Math.types";

describe("Slide component tests", () => {
    let props: MathProps;

    beforeEach(() => {
        props = {
            children: String.raw`\begin{aligned}P(X_1, \ldots, X_n) &=P (X_1, \ldots, X_{n-1} ) Pm (X_n \mid X_1, \ldots, X_{n-1} ) \\
            &=P (X_1, \ldots, X_{n-2} ) P (X_{n-1} \mid X_1, \ldots, X_{n-2} ) P (X_n \mid X_1, \ldots, X_{n-1} ) \\
            &=\ldots \\
            &=\prod_{i=1}^n P(X_i \mid X_1, \ldots, X_{i-1})\end{aligned}`,
        };
    });

    const renderComponent = () => render(<Math {...props} />);

    it("should render a block equation without crashing", () => {
        const { container } = renderComponent();

        // this is just checking that katex has done *something* with the equation
        // because it is passed in as P(X_1) and katex should subscript the 1
        expect(container).toHaveTextContent("P(X1");
    });
});
