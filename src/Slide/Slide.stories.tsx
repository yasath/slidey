import React from "react";
import Slide from "./Slide";

export default {
    title: "Slide",
};

export const RegularSlide = ({ title, subtitle }) => (
    <Slide title={title} subtitle={subtitle}>
        <p>Some example slide text would go here</p>
    </Slide>
);
RegularSlide.args = {
    title: "Slide title",
    subtitle: "Slide subtitle",
}
