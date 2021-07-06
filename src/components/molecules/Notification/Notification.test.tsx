import TestProvider from "providers/TestProvider";
import Notification from "./Notification";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing component", () => {
  it("Renders the component", () => {
    render(
      <TestProvider>
        <Notification id="test" date="16/03/2021" content="This is Notification" />;
      </TestProvider>
    );

    screen.getByText("16/03/2021");
    screen.getByText("This is Notification");
    screen.getByRole("button");
  });
  it("Working the component", () => {
    render(
      <TestProvider>
        <Notification id="test" date="16/03/2021" content="This is Notification" />;
      </TestProvider>
    );
    //catching elements
    const date = screen.getByText("16/03/2021");
    const content = screen.getByText("This is Notification");
    const closeButton = screen.getByRole("button");

    //clicking the button
    fireEvent.click(closeButton);

    //checking if elements have disappeared
    expect(date).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });
});
