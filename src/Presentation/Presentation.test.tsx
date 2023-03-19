import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';

import Slide from '../Slide';
import Presentation from './Presentation';
import { type PresentationProps } from './Presentation.types';

describe('Presentation component tests', () => {
    let props: PresentationProps;

    beforeEach(() => {
        props = {
            children: [
                <Slide key="first" title="First slide">Some example slide text would go here</Slide>,
                <Slide key="second" title="Second slide">Some example slide text would go here</Slide>,
                <Slide key="third" title="Third slide">Some example slide text would go here</Slide>,
            ],
        };
    });

    const renderComponent = () => render(<Presentation {...props} />);

    it('should display only one slide at once', () => {
        const { container } = renderComponent();
        expect(container).toHaveTextContent('First slide');
        expect(container).not.toHaveTextContent('Second slide');
        expect(container).not.toHaveTextContent('Third slide');
    });

    it('should count the correct number of slides', () => {
        const { container } = renderComponent();
        expect(container).toHaveTextContent('1 of 3');
    });

    it('should navigate between slides on button clicks', () => {
        const { container } = renderComponent();
        const previousSlideButton = getByTestId(container, 'previous-slide');
        const nextSlideButton = getByTestId(container, 'next-slide');
        const clickEvent = new MouseEvent('click', { bubbles: true });

        fireEvent(nextSlideButton, clickEvent);
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        fireEvent(nextSlideButton, clickEvent);
        expect(container).toHaveTextContent('Third slide');
        expect(container).toHaveTextContent('3 of 3');

        fireEvent(previousSlideButton, clickEvent);
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        fireEvent(previousSlideButton, clickEvent);
        expect(container).toHaveTextContent('First slide');
        expect(container).toHaveTextContent('1 of 3');
    });

    it('should navigate between slides on arrow keypresses', () => {
        const { container } = renderComponent();
        const leftArrowEvent = () => fireEvent.keyDown(container, { key: 'ArrowLeft', code: 'ArrowLeft' });
        const rightArrowEvent = () => fireEvent.keyDown(container, { key: 'ArrowRight', code: 'ArrowRight' });

        rightArrowEvent();
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        rightArrowEvent();
        expect(container).toHaveTextContent('Third slide');
        expect(container).toHaveTextContent('3 of 3');

        leftArrowEvent();
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        leftArrowEvent();
        expect(container).toHaveTextContent('First slide');
        expect(container).toHaveTextContent('1 of 3');
    });

    it('should navigate through slides on spacebar presses', () => {
        const { container } = renderComponent();
        const spaceEvent = () => fireEvent.keyDown(container, { key: ' ', code: 'Space' });

        spaceEvent();
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        spaceEvent();
        expect(container).toHaveTextContent('Third slide');
        expect(container).toHaveTextContent('3 of 3');
    });

    it('should navigate through slides on click', () => {
        const { container } = renderComponent();
        const clickEvent = () => fireEvent.click(getByTestId(container, 'current-slide'));

        clickEvent();
        expect(container).toHaveTextContent('Second slide');
        expect(container).toHaveTextContent('2 of 3');

        clickEvent();
        expect(container).toHaveTextContent('Third slide');
        expect(container).toHaveTextContent('3 of 3');
    });

    it('should not show controls if requested', () => {
        const { container } = render(<Presentation showControls={false} {...props} />);
        expect(container).not.toHaveTextContent('1 of 3');
    });
});
