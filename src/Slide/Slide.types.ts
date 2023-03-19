import { type ReactNode } from 'react';

export type SlideProps = {
    title?: string;
    subtitle?: string;
    dark?: boolean;
    centre?: boolean;
    children?: ReactNode;
};
