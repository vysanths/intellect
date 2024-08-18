import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SlotSelector from './SlotSelector';

// Mock the child components
vi.mock('./DayPicker', () => ({
  __esModule: true,
  default: ({ onClick }: { onClick: ({displayDate} : {displayDate: string}) => void;}) => (
    <div>
      <button onClick={() => onClick({ displayDate: '2024-08-20' })}>Select Date</button>
    </div>
  )
}));

vi.mock('./AvailableSlots', () => ({
  __esModule: true,
  default: ({ onClick }: {onClick: (selectedTime: string) => void}) => (
    <div>
      <button onClick={() => onClick('10:00 AM')}>Select Time</button>
    </div>
  )
}));

describe('SlotSelector Component', () => {
  it('renders correctly and handles interactions', async () => {
    render(<SlotSelector />);

    // Check initial rendering
    expect(screen.getByText(/Pick a date/i)).toBeInTheDocument();
    expect(screen.queryByText(/You have selected the slot/i)).not.toBeInTheDocument();

    // Simulate selecting a date
    fireEvent.click(screen.getByText(/Select Date/i));

    // Check if the time slot selection is available after selecting a date
    expect(screen.getByText(/Select Time/i)).toBeInTheDocument();

    // Simulate selecting a time
    fireEvent.click(screen.getByText(/Select Time/i));

    // Verify the selected slot and time are displayed
    await waitFor(() => {
      expect(screen.getByText(/You have selected the slot 2024-08-20 : 10:00 AM/i)).toBeInTheDocument();
    });
  });
});
