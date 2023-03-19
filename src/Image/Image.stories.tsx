import React from 'react';
import Slide from '../Slide';
import Image from './Image';
import { type ImageProps } from './Image.types';

export default {
    title: 'Image',
    component: Image,
    argTypes: {
        width: {
            name: 'width',
            type: { name: 'width', required: false },
            description: 'Percentage width in relation to the slide',
            defaultValue: 50,
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 50 },
            },
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1,
            },
        },
    },
};

export const ExternalImage = ({ src, alt, width, rounded }: ImageProps) => (
    <Slide title="External image">
        <p>Images can convey information more effectively than words.
            {' '}
            Below is a placeholder image, which can be replaced through the controls:
        </p>
        <Image src={src} rounded={rounded} alt={alt} width={width} />
    </Slide>
);
ExternalImage.args = {
    src: 'https://placehold.co/600x400',
    alt: 'Example image',
    rounded: true,
};
