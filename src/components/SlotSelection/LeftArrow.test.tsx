import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrow from "./LeftArrow";

// Mock VisibilityContext
const mockVisibilityContext = {
  useIsVisible: vi.fn(),
  scrollPrev: vi.fn(),
};

describe("LeftArrow Component", () => {
  it("renders the LeftArrow component", () => {
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <LeftArrow />
      </VisibilityContext.Provider>
    );

    // Use query based on the actual render output, like `getByTestId` or `getByRole`
    const arrowElement = screen.getByTestId("left-arrow-icon");
    expect(arrowElement).toBeInTheDocument();
  });

  it("disables the arrow when the first item is visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(true);

    
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <LeftArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("left-arrow-icon");
    expect(arrowElement).toHaveClass("opacity-15 cursor-not-allowed");
  });

  it("enables the arrow when the first item is not visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(false);

    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <LeftArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("left-arrow-icon");
    expect(arrowElement).toHaveClass("opacity-100");
  });

  it("scrolls to the previous item when the arrow is clicked and the first item is not visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(false);

    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <LeftArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("left-arrow-icon");
    fireEvent.click(arrowElement);

    expect(mockVisibilityContext.scrollPrev).toHaveBeenCalled();
  });
});
