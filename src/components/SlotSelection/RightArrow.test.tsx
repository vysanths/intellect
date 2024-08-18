import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrow from "./RightArrow";

// Mock VisibilityContext
const mockVisibilityContext = {
  useIsVisible: vi.fn(),
  scrollNext: vi.fn(),
};

describe("RightArrow Component", () => {
  beforeEach(() => {
    // Reset mock functions before each test
    vi.clearAllMocks();
  });

  it("renders the RightArrow component", () => {
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <RightArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("right-arrow-icon");
    expect(arrowElement).toBeInTheDocument();
  });

  it("disables the arrow when the last item is visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(true);

    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <RightArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("right-arrow-icon");
    expect(arrowElement).toHaveClass("opacity-15 cursor-not-allowed");
  });

  it("enables the arrow when the last item is not visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(false);

    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <RightArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("right-arrow-icon");
    expect(arrowElement).toHaveClass("opacity-100");
  });

  it("scrolls to the next item when the arrow is clicked and the last item is not visible", () => {
    mockVisibilityContext.useIsVisible.mockReturnValue(false);

    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <VisibilityContext.Provider value={mockVisibilityContext as any}>
        <RightArrow />
      </VisibilityContext.Provider>
    );

    const arrowElement = screen.getByTestId("right-arrow-icon");
    fireEvent.click(arrowElement);

    expect(mockVisibilityContext.scrollNext).toHaveBeenCalled();
  });
});
