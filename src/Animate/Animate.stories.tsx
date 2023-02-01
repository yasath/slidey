import React from "react";
import Slide from "../Slide";
import Presentation from "../Presentation";
import Animate from "./Animate";

export default {
    title: "Animate"
};

export const SingleElements = () => (
    <Presentation>
        <Slide title="Individual Animate components">
            <p>Navigate forwards to see the items animate in!</p>
            <Animate>
                <p>Here's the first <code>Animate</code> component...</p>
            </Animate>
            <Animate>
                <p>And here's another one!</p>
            </Animate>
        </Slide>
    </Presentation>
);

export const BulletList = () => (
    <Presentation>
        <Slide title="Animated bullet list">
            <p>Navigate forwards to see the bullet items animate in!</p>
            <Animate>
                <ul>
                    <li>Here's the first bullet point...</li>
                    <li>And now a second one...</li>
                    <li>Finally, here's the third one!</li>
                </ul>
            </Animate>
        </Slide>
    </Presentation>
);

export const MultipleElements = () => (
    <Presentation>
        <Slide title="One Animate component" subtitle="With multiple child elements">
            <p>Navigate forwards to see the items animate in!</p>
            <Animate>
                <p>These elements are...</p>
                <p>All in one <code>Animate</code> component...</p>
                <p>But they animate in separately!</p>
            </Animate>
        </Slide>
    </Presentation>
);
