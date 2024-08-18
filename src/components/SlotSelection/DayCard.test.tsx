import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import this to use toBeInTheDocument
import DayCard from "./DayCard";
import dayjs from "dayjs";
import { describe, it, expect, vi } from "vitest";
import { GroupedSlot } from "../../interfaces/slots.interface";

// Mock data
const mockSlot: GroupedSlot = {
  displayDate: "2023-08-18",
  slots: []
  // add other properties as needed
};

describe("DayCard Component", () => {
  const mockOnClick = vi.fn();

  it("renders the DayCard component with the correct date and day", () => {
    render(<DayCard slot={mockSlot} onClick={mockOnClick} selectedDate="2023-08-18" />);

    const dayElement = screen.getByText(dayjs(mockSlot.displayDate).format("DD"));
    const dayNameElement = screen.getByText(dayjs(mockSlot.displayDate).format("ddd"));

    expect(dayElement).toBeInTheDocument();
    expect(dayNameElement).toBeInTheDocument();
  });

  it("applies the correct background color when the date is selected", () => {
    render(<DayCard slot={mockSlot} onClick={mockOnClick} selectedDate="2023-08-18" />);

    const dayCardElement = screen.getByText(dayjs(mockSlot.displayDate).format("DD")).closest("div");

    expect(dayCardElement).toHaveClass("bg-[#eaeff3]");
  });

  it("applies the correct background color when the date is not selected", () => {
    render(<DayCard slot={mockSlot} onClick={mockOnClick} selectedDate="2023-08-19" />);

    const dayCardElement = screen.getByText(dayjs(mockSlot.displayDate).format("DD")).closest("div");

    expect(dayCardElement).toHaveClass("bg-white");
  });

  it("calls onClick handler when the card is clicked", () => {
    render(<DayCard slot={mockSlot} onClick={mockOnClick} selectedDate="2023-08-18" />);

    const dayCardElement = screen.getByText(dayjs(mockSlot.displayDate).format("DD")).closest("div");

    fireEvent.click(dayCardElement!);

    expect(mockOnClick).toHaveBeenCalledWith(mockSlot);
  });
});
