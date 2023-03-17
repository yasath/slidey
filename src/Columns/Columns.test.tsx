import React from "react";
import { getByTestId, render } from "@testing-library/react";

import Columns from "./Columns";
import { ColumnsProps } from "./Columns.types";

describe("Test Component", () => {
    let props: ColumnsProps;

    beforeEach(() => {
        props = {
            number: 3,
            children: (
                <>
                    <p>Column 1</p>
                    <p>Column 2</p>
                    <p>Column 3</p>
                </>
            )
        };
    });

    const renderComponent = () => render(<Columns {...props} />);

    it("should have the correct number of columns", () => {
        const { container } = renderComponent();
        const columnContainer = getByTestId(container, "column-container");

        expect(columnContainer.children.length).toBe(3);
        expect(columnContainer).toHaveStyle('grid-template-columns: repeat(3,1fr)');
    });
});
