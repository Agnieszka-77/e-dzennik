import TestProvider from "providers/TestProvider";
import Field from "./Field";
import { render, screen } from "@testing-library/react";

describe("Testing component", () => {
  it("Renders the component", () => {
    render(
      <TestProvider>
        <Field name="name" value="agnieszka" />;
      </TestProvider>
    );
    screen.getByText("agnieszka");
  });
});
