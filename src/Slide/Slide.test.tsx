import React from "react";
import { render } from "@testing-library/react";

import Slide from "./Slide";
import { SlideProps } from "./Slide.types";

describe("Slide component tests", () => {
    let props: SlideProps;

    beforeEach(() => {
        props = {
            title: "Slide title",
            subtitle: "Slide subtitle",
        };
    });

    const renderComponent = () => render(<Slide {...props} />);

    it("should render a regular slide correctly", () => {
        const { container } = renderComponent();

        expect(container).toHaveTextContent("Slide title");
        expect(container).toHaveTextContent("Slide subtitle");
    });

    it("should render JSX children correctly", () => {
        props.children = <span>Example children</span>
        const { container } = renderComponent();

        expect(container).toHaveTextContent("Example children");
    });
});
