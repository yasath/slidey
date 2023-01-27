import React from "react";
import Slide from "../Slide";
import Presentation from "./Presentation";

export default {
    title: "Presentation"
};

export const Slideshow = () => (
    <Presentation>
        <Slide title="First slide">
            <p>Some example slide text would go here</p>
        </Slide>
        <Slide title="Second slide">
            <p>Some example slide text would go here</p>
        </Slide>
        <Slide title="Third slide">
            <p>Some example slide text would go here</p>
        </Slide>
    </Presentation>
);
