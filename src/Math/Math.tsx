import React from 'react';
import { InlineMath } from 'react-katex';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'katex/dist/katex.min.css';

import { type MathProps } from './Math.types';

const Math: React.FC<MathProps> = ({ equation }) => (
    <>
        {equation && (
            <InlineMath math={equation} />
        )}
    </>
);

export default Math;
