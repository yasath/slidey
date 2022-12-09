import React from "react";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

import { MathProps } from "./Math.types";

const Math: React.FC<MathProps> = ({ equation }) => (
    <InlineMath math={equation} />
);

export default Math;
