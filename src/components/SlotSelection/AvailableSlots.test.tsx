import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AvailbleTimeSlots from "./AvailableSlots";
import { GroupedSlot } from "../../interfaces/slots.interface";

// Mock data
const mockSlots: GroupedSlot = {
  displayDate: "2024/08/26",
  slots: [
    { displayTime: "09:00 AM", displayTimeEnd: '' },
    { displayTime: "09:30 AM", displayTimeEnd: '' },
    { displayTime: "10:00 AM", displayTimeEnd: '' },
  ],
};

// Mock callback
const mockOnClick = vi.fn();

describe("AvailbleSlots Component", () => {
  it("renders the component with available time slots", () => {
    render(
      <AvailbleTimeSlots
        selectedSlot={mockSlots}
        onCick={mockOnClick} // Note: Prop name should be onClick
        selectedTime={null}
      />
    );

    // Check if the time slots are rendered
    mockSlots.slots.forEach((slot) => {
      expect(screen.getByText(slot.displayTime)).toBeInTheDocument();
    });
  });

  it("highlights the selected time slot", () => {
    render(
      <AvailbleTimeSlots
        selectedSlot={mockSlots}
        onCick={mockOnClick}
        selectedTime="09:00 AM"
      />
    );

    // Check if the selected time slot has the correct background color
    const selectedSlot = screen.getByText("09:00 AM");
    expect(selectedSlot).toHaveClass("bg-gray-500");
  });

  it("does not highlight non-selected time slots", () => {
    render(
      <AvailbleTimeSlots
        selectedSlot={mockSlots}
        onCick={mockOnClick}
        selectedTime="09:00 AM"
      />
    );

    // Check if non-selected time slots have the correct background color
    const nonSelectedSlots = screen.getAllByText(/09:30 AM|10:00 AM/);
    nonSelectedSlots.forEach((slot) => {
      expect(slot).toHaveClass("bg-white");
    });
  });

  it("calls onClick with the correct displayTime when a slot is clicked", () => {
    render(
      <AvailbleTimeSlots
        selectedSlot={mockSlots}
        onCick={mockOnClick}
        selectedTime={null}
      />
    );

    // Click on a time slot
    fireEvent.click(screen.getByText("09:30 AM"));

    // Check if onClick is called with the correct argument
    expect(mockOnClick).toHaveBeenCalledWith("09:30 AM");
  });

  it("renders a message when there are no slots", () => {
    render(
      <AvailbleTimeSlots
        selectedSlot={{displayDate: '', slots: []}}
        onCick={mockOnClick}
        selectedTime={null}
      />
    );

    // Check if the no slots message is rendered
    expect(
      screen.getByText("Please select a date with slots")
    ).toBeInTheDocument();
  });
});
