import TestProvider from "providers/TestProvider";
import Students from "./Students";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Testing component", () => {
  it("Renders the component", () => {
    render(
      <TestProvider>
        <Students />
      </TestProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    const grandInput = screen.getByTestId("grand-input");
    const selectSubject = screen.getByTestId("select-subject");
    const firstActor = screen.getByText("wojtek prowacki");
    const secondActor = screen.getByText("agnieszka pawlik");
    const subjectGardes = screen.getByTestId("1");

    expect(searchInput).toBeInTheDocument();
    expect(grandInput).toBeInTheDocument();
    expect(selectSubject).toBeInTheDocument();
    expect(firstActor).toBeInTheDocument();
    expect(secondActor).toBeInTheDocument();
    expect(subjectGardes).toBeInTheDocument();
  });

  it("Working Inputs", () => {
    render(
      <TestProvider>
        <Students />
      </TestProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    const grandInput = screen.getByTestId("grand-input");
    const selectSubject = screen.getByTestId("select-subject");

    fireEvent.change(searchInput, { target: { value: "wojtek prowacki" } });
    fireEvent.keyUp(searchInput);

    fireEvent.change(grandInput, { target: { value: "6" } });
    fireEvent.change(selectSubject, { target: { value: "c#" } });

    expect(searchInput).toHaveValue("wojtek prowacki");
    expect(grandInput).toHaveValue(6);
    expect(selectSubject).toHaveValue("c#");
  });

  it("Searching users", () => {
    render(
      <TestProvider>
        <Students />
      </TestProvider>
    );

    const searchInput = screen.getByTestId("search-input");

    const firstActor = screen.getByText("wojtek prowacki");
    const secondActor = screen.getByText("agnieszka pawlik");

    expect(firstActor).toBeInTheDocument();
    expect(secondActor).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "wojtek prowacki" } });
    fireEvent.keyUp(searchInput);

    expect(searchInput).toHaveValue("wojtek prowacki");

    expect(firstActor).toBeInTheDocument();
    expect(secondActor).not.toBeInTheDocument();
  });

  it("Add gard", () => {
    render(
      <TestProvider>
        <Students />
      </TestProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    const grandInput = screen.getByTestId("grand-input");
    const selectSubject = screen.getByTestId("select-subject");
    const subjectGardes = screen.getByTestId("1");

    fireEvent.change(searchInput, { target: { value: "wojtek prowacki" } });
    fireEvent.keyUp(searchInput);

    fireEvent.change(grandInput, { target: { value: "6" } });
    fireEvent.change(selectSubject, { target: { value: "c#" } });

    expect(subjectGardes).toBeInTheDocument();
    expect(subjectGardes).not.toHaveTextContent("6");

    const btnAdd = screen.getByText("Add grade");
    fireEvent.click(btnAdd);

    const btnYes = screen.getByText("Yes");
    fireEvent.click(btnYes);

    expect(subjectGardes).toHaveTextContent("6");
  });
});
