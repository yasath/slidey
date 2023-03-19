import React from 'react';
import Slide from './Slide';
import { type SlideProps } from './Slide.types';

export default {
    title: 'Slide',
};

export const RegularSlide = ({ title, subtitle }: SlideProps) => (
    <Slide title={title} subtitle={subtitle}>
        <p>Some example slide text would go here</p>
    </Slide>
);
RegularSlide.args = {
    title: 'Slide title',
    subtitle: 'Slide subtitle',
};

export const DarkThemeSlide = ({ title, subtitle, dark }: SlideProps) => (
    <Slide title={title} subtitle={subtitle} dark={dark}>
        <p>Some example slide text would go here</p>
    </Slide>
);
DarkThemeSlide.args = {
    title: 'Slide title',
    subtitle: 'Slide subtitle',
    dark: true,
};

export const CentredSlide = ({ title, subtitle, centre }: SlideProps) => (
    <Slide title={title} subtitle={subtitle} centre={centre}>
        <p>Some example slide text would go here</p>
    </Slide>
);
CentredSlide.args = {
    title: 'Slide title',
    subtitle: 'Slide subtitle',
    centre: true,
};
