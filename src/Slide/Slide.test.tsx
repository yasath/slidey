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

    it("should render light mode correctly", () => {
        const { container } = renderComponent();

        expect(container.innerHTML).toContain('markdown-body');
        expect(container.innerHTML).not.toContain('markdown-body-dark');
    });

    it("should render dark mode correctly", () => {
        props.dark = true;
        const { container } = renderComponent();

        expect(container.innerHTML).toContain('markdown-body-dark');
    });

    it("should render centred slide correctly", () => {
        props.centre = true;
        const { container } = renderComponent();

        expect(getComputedStyle(container.firstChild as Element).textAlign).toBe('center');
        expect(getComputedStyle(container.firstChild as Element).display).toBe('flex');
        expect(getComputedStyle(container.firstChild as Element).flexDirection).toBe('column');
        expect(getComputedStyle(container.firstChild as Element).alignItems).toBe('center');
        expect(getComputedStyle(container.firstChild as Element).justifyContent).toBe('center');
    });
});
