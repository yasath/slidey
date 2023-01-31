// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Animate from "./Animate";
import { AnimateProps } from "./Animate.types";

describe("Test Component", () => {
  let props: AnimateProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Animate {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "example text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Animate");

    expect(component).toHaveTextContent("example text");
  });
});
