import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MoodPicker from './MoodPicker';
import moods from '../../dataset/moods';

describe('MoodPicker Component', () => {
  const handleClick = vi.fn();

  it('renders mood options correctly', () => {
    render(<MoodPicker onClick={handleClick} mood="" />);

    // Check if all mood options are rendered
    moods.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('applies the correct background color for the selected mood', () => {
    const selectedMood = moods[0].text; // Pick the first mood as the selected one
    render(<MoodPicker onClick={handleClick} mood={selectedMood} />);

    // Check if the selected mood has the correct background color
    const selectedMoodElement = screen.getByText(selectedMood).closest('div');
    expect(selectedMoodElement).toHaveClass('bg-[#eaeff3]');
  });

  it('calls onClick with the correct mood when a mood is clicked', () => {
    render(<MoodPicker onClick={handleClick} mood="" />);

    // Simulate clicking on each mood and check if onClick is called with the correct argument
    moods.forEach(({ text }) => {
      const moodElement = screen.getByText(text).closest('div');
      fireEvent.click(moodElement!);
      expect(handleClick).toHaveBeenCalledWith(text);
    });
  });
});
