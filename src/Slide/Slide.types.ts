import { ReactNode } from "react";

export interface SlideProps {
    title?: string;
    subtitle?: string;
    dark?: boolean;
    children?: ReactNode;
}
