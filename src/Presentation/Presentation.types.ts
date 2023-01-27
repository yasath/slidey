import { ReactElement } from "react";
import Slide from "../Slide";

export interface PresentationProps {
    children: ReactElement<typeof Slide>[];
}
