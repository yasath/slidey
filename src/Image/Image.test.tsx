import React from 'react';
import { getByTestId, render } from '@testing-library/react';

import Image from './Image';
import { type ImageProps } from './Image.types';

describe('Image component tests', () => {
    let props: ImageProps;

    beforeEach(() => {
        props = {
            src: 'https://placehold.co/600x400',
            alt: 'Example image',
        };
    });

    const renderComponent = () => render(<Image {...props} />);

    it('should render an image', () => {
        const { container } = renderComponent();
        const image = getByTestId(container, 'image');

        expect(image).toHaveAttribute('src', 'https://placehold.co/600x400');
        expect(image).toHaveAttribute('alt', 'Example image');
    });

    it('should render rounded image corners', () => {
        props.rounded = true;
        const { container } = renderComponent();
        const image = getByTestId(container, 'image');

        expect(image).toHaveStyle('border-radius: 8px');
    });

    it('should render non-rounded image corners', () => {
        props.rounded = false;
        const { container } = renderComponent();
        const image = getByTestId(container, 'image');

        expect(image).toHaveStyle('border-radius: 0px');
    });

    it('should correctly have default width', () => {
        const { container } = renderComponent();
        const image = getByTestId(container, 'image');

        expect(image).toHaveStyle('width: 50%');
    });

    it('should correctly pass image width in', () => {
        props.width = 40;
        const { container } = renderComponent();
        const image = getByTestId(container, 'image');

        expect(image).toHaveStyle('width: 40%');
    });
});
