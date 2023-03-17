import { ReactNode } from "react";

export interface SlideProps {
    title?: string;
    subtitle?: string;
    dark?: boolean;
    centre?: boolean;
    children?: ReactNode;
}
