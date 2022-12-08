import React from "react";
import Slide from "../Slide";
import Math from "./Math";

export default {
    title: "Math",
};

export const BlockEquation = ({ latex }) => (
    <Slide title="Example equation" subtitle="Math equations are supported via LaTeX">
        <Math>{latex}</Math>
    </Slide>
);
BlockEquation.args = {
    latex: String.raw`\begin{aligned}P(X_1, \ldots, X_n) &=P (X_1, \ldots, X_{n-1} ) Pm (X_n \mid X_1, \ldots, X_{n-1} ) \\
    &=P (X_1, \ldots, X_{n-2} ) P (X_{n-1} \mid X_1, \ldots, X_{n-2} ) P (X_n \mid X_1, \ldots, X_{n-1} ) \\
    &=\ldots \\
    &=\prod_{i=1}^n P(X_i \mid X_1, \ldots, X_{i-1})\end{aligned}`,
}
