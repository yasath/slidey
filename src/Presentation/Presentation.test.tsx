import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";

import Presentation from "./Presentation";
import { PresentationProps } from "./Presentation.types";
import Slide from "../Slide";

describe("Presentation component tests", () => {
    let props: PresentationProps;

    beforeEach(() => {
        props = {
            children: [
                <Slide title="First slide">Some example slide text would go here</Slide>,
                <Slide title="Second slide">Some example slide text would go here</Slide>,
                <Slide title="Third slide">Some example slide text would go here</Slide>
            ],
        };
    });

    const renderComponent = () => render(<Presentation {...props} />);

    it("should display only one slide at once", () => {
        const { container } = renderComponent();
        expect(container).toHaveTextContent("First slide");
        expect(container).not.toHaveTextContent("Second slide");
        expect(container).not.toHaveTextContent("Third slide");
    });

    it("should count the correct number of slides", () => {
        const { container } = renderComponent();
        expect(container).toHaveTextContent("1 of 3");
    });

    it("should navigate between slides on button clicks", () => {
        const { container } = renderComponent();
        const previousSlideButton = getByTestId(container, "previous-slide");
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        fireEvent(nextSlideButton, clickEvent);
        expect(container).toHaveTextContent("Second slide");
        expect(container).toHaveTextContent("2 of 3");

        fireEvent(nextSlideButton, clickEvent);
        expect(container).toHaveTextContent("Third slide");
        expect(container).toHaveTextContent("3 of 3");

        fireEvent(previousSlideButton, clickEvent);
        expect(container).toHaveTextContent("Second slide");
        expect(container).toHaveTextContent("2 of 3");

        fireEvent(previousSlideButton, clickEvent);
        expect(container).toHaveTextContent("First slide");
        expect(container).toHaveTextContent("1 of 3");
    });
});
