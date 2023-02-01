import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";

import Animate from "./Animate";
import { AnimateProps } from "./Animate.types";
import Presentation from "../Presentation";
import Slide from "../Slide";

describe("Test Component", () => {
    let props: AnimateProps;

    beforeEach(() => {
        props = {
            children: (
                <Animate>
                    <p data-testid="1">Individual element one</p>
                    <p data-testid="2">Individual element two</p>
                    <p data-testid="3">Individual element three</p>
                </Animate>
            )
        };
    });

    const renderComponent = () => render(
        <Presentation>
            <Slide {...props} />
        </Presentation>
    );

    it("should show the correct elements when navigating forwards", () => {
        const { container } = renderComponent();
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        const first = getByTestId(container, "1").parentElement!;
        const second = getByTestId(container, "2").parentElement!;
        const third = getByTestId(container, "3").parentElement!;

        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('visible');
    });

    it("should show the correct elements when navigating backwards", () => {
        const { container } = renderComponent();
        const previousSlideButton = getByTestId(container, "previous-slide");
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        const first = getByTestId(container, "1").parentElement!;
        const second = getByTestId(container, "2").parentElement!;
        const third = getByTestId(container, "3").parentElement!;

        fireEvent(nextSlideButton, clickEvent);
        fireEvent(nextSlideButton, clickEvent);
        fireEvent(nextSlideButton, clickEvent);

        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('visible');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');
    });

    it("should show the correct elements when navigating forwards then backwards", () => {
        const { container } = renderComponent();
        const previousSlideButton = getByTestId(container, "previous-slide");
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        const first = getByTestId(container, "1").parentElement!;
        const second = getByTestId(container, "2").parentElement!;
        const third = getByTestId(container, "3").parentElement!;

        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('visible');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(previousSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');
    });

    it("should independently animate list items in an unordered list", () => {
        props.children = (
            <Animate>
                <ul>
                    <li data-testid="1">Individual element one</li>
                    <li data-testid="2">Individual element two</li>
                    <li data-testid="3">Individual element three</li>
                </ul>
            </Animate>
        );

        const { container } = renderComponent();
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        const first = getByTestId(container, "1").parentElement!;
        const second = getByTestId(container, "2").parentElement!;
        const third = getByTestId(container, "3").parentElement!;

        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('visible');
    });

    it("should independently animate list items in an ordered list", () => {
        props.children = (
            <Animate>
                <ol>
                    <li data-testid="1">Individual element one</li>
                    <li data-testid="2">Individual element two</li>
                    <li data-testid="3">Individual element three</li>
                </ol>
            </Animate>
        );

        const { container } = renderComponent();
        const nextSlideButton = getByTestId(container, "next-slide");
        const clickEvent = new MouseEvent("click", { bubbles: true });

        const first = getByTestId(container, "1").parentElement!;
        const second = getByTestId(container, "2").parentElement!;
        const third = getByTestId(container, "3").parentElement!;

        expect(window.getComputedStyle(first).visibility).toBe('hidden');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('hidden');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('hidden');

        fireEvent(nextSlideButton, clickEvent);
        expect(window.getComputedStyle(first).visibility).toBe('visible');
        expect(window.getComputedStyle(second).visibility).toBe('visible');
        expect(window.getComputedStyle(third).visibility).toBe('visible');
    });

    it("should not render anything if no children are passed", () => {
        props.children = null;

        const { container } = renderComponent();
        expect(container.getElementsByClassName('markdown-body')[0]).toBeEmptyDOMElement();
    });
});
