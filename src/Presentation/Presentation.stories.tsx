import React from 'react';
import Slide from '../Slide';
import Presentation from './Presentation';

export default {
    title: 'Presentation',
};

export const WithControls = () => (
    <Presentation>
        <Slide title="First slide">
            <p>Some example slide text would go here</p>
        </Slide>
        <Slide title="Second slide">
            <p>Some example slide text would go here</p>
        </Slide>
        <Slide title="Third slide">
            <p>Some example slide text would go here</p>
        </Slide>
    </Presentation>
);

export const WithoutControls = () => (
    <Presentation showControls={false}>
        <Slide title="First slide">
            <p>Some example slide text would go here</p>
            <p>Navigate by clicking, or by using arrow keys or the spacebar</p>
        </Slide>
        <Slide title="Second slide">
            <p>Some example slide text would go here</p>
        </Slide>
        <Slide title="Third slide">
            <p>Some example slide text would go here</p>
        </Slide>
    </Presentation>
);
