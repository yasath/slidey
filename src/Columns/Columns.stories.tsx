import React from 'react';
import Slide from '../Slide';
import Image from '../Image';
import Columns, { Column } from './Columns';
import { type ColumnsProps } from './Columns.types';

const argTypes = {
    number: {
        name: 'number',
        type: { name: 'number', required: true },
        defaultValue: 3,
        table: {
            type: { summary: 'number' },
            defaultValue: { summary: 3 },
        },
        control: {
            type: 'range',
            min: 1,
            max: 5,
            step: 1,
        },
    },
};

export default {
    title: 'Columns',
    component: Columns,
};

export const CommonLayout = () => (
    <Slide title="Common column layout">
        Columns can be used to show images next to text, for example:
        <Columns number={2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vulputate massa.
                Integer auctor auctor finibus. Duis fermentum turpis at elit fringilla iaculis. Donec
                elementum, risus non porttitor rhoncus, sem nulla posuere velit, eget commodo tortor
                mi in est. Sed accumsan augue lectus, in dignissim sem porta sed. Vivamus id sagittis
                nulla. Phasellus sed massa libero. Quisque rutrum massa at condimentum aliquam. In a
                eleifend purus. Ut maximus a metus sed dapibus. Phasellus quis neque id velit consequat
                porttitor vestibulum eu lectus.
            </p>
            <Image src="https://placehold.co/600x300" width={100} />
        </Columns>
    </Slide>
);

export const AutomaticColumning = ({ number }: ColumnsProps) => (
    <Slide title="Automatic columning">
        Move the slider below to change the number of columns. By default,
        {' '}
        <strong>each individual child element becomes its own column</strong>.

        <Columns number={number}>
            <p>This content makes up the 1st column.</p>
            <p>This content makes up the 2nd column.</p>
            <p>This content makes up the 3rd column.</p>
            <p>This content makes up the 4th column.</p>
            <p>This content makes up the 5th column.</p>
        </Columns>
    </Slide>
);
AutomaticColumning.argTypes = argTypes;

export const ManualColumning = ({ number }: ColumnsProps) => (
    <Slide title="Manual columning">
        You can use the <code>Column</code> component to manually define columns with multiple child elements.
        <Columns number={number}>
            <Column>
                <p>This content makes up the 1st column.</p>
                <p>But so does this line of text.</p>
                <p>And also this line of text.</p>
            </Column>
            <p>This content makes up the 2nd column.</p>
            <Column>
                <p>This content makes up the 3rd column.</p>
                <p>This line of text is also in this column.</p>
            </Column>
        </Columns>
    </Slide>
);
ManualColumning.argTypes = argTypes;
