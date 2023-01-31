import React from "react";
import Slide from "../Slide";
import Presentation from "../Presentation";
import Animate from "./Animate";

export default {
    title: "Animate"
};

export const BulletList = () => (
    <Presentation>
        <Slide title="Animated bullet list">
            <Animate>
                <p>Some example slide text would go here</p>
            </Animate>
            <Animate>
                <p>Some example slide text would go here</p>
            </Animate>
        </Slide>
    </Presentation>
);
