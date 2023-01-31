import React from "react";
import { render } from "@testing-library/react";

import Animate from "./Animate";
import { AnimateProps } from "./Animate.types";

describe.skip("Test Component", () => {
    let props: AnimateProps;

    beforeEach(() => {
        props = {
            children: (<p>Example text</p>)
        };
    });

    const renderComponent = () => render(<Animate {...props} />);

    it("should render correctly", () => {
        const { container } = renderComponent();
    });
});
