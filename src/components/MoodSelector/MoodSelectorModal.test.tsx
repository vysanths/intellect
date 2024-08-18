import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MoodSelectorModal from './MoodSelectorModal';

describe('MoodSelectorModal Component', () => {
  it('opens modal when the "Select your mood" button is clicked', () => {
    render(<MoodSelectorModal />);

    // Check if modal is not open initially
    expect(screen.queryByText(/Wellbeing Check-in/i)).not.toBeInTheDocument();

    // Click the button to open the modal
    fireEvent.click(screen.getByText(/Select your mood/i));

    // Check if modal opens
    expect(screen.getByText(/Wellbeing Check-in/i)).toBeInTheDocument();
  });

  it('renders MoodPicker inside the modal', () => {
    render(<MoodSelectorModal />);

    // Open the modal
    fireEvent.click(screen.getByText(/Select your mood/i));

    // Check if MoodPicker is rendered
    expect(screen.getByText(/Hello! How are you feeling today?/i)).toBeInTheDocument();
  });

  it('disables "Continue" button when no mood is selected', () => {
    render(<MoodSelectorModal />);

    // Open the modal
    fireEvent.click(screen.getByText(/Select your mood/i));

    // Check if "Continue" button is disabled
    const continueButton = screen.getByText(/Continue/i);
    expect(continueButton).toBeDisabled();
  });

  it('enables "Continue" button when a mood is selected', async () => {
    render(<MoodSelectorModal />);

    // Open the modal
    fireEvent.click(screen.getByText(/Select your mood/i));

    // Select a mood (replace "YourMoodTextHere" with an actual mood text)
    const moodOption = await waitFor(() => screen.getByTestId("Bad-id"));
    fireEvent.click(moodOption);

    // Check if "Continue" button is enabled
    const continueButton = screen.getByText(/Continue/i);
    expect(continueButton).not.toBeDisabled();

    // Click the "Continue" button
    fireEvent.click(continueButton);
  });
});
