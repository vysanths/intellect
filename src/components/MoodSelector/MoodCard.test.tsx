import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MoodCard from './MoodCard';

describe('MoodCard Component', () => {
  const handleClick = vi.fn();

  it('renders children correctly', () => {
    render(
      <MoodCard onClick={handleClick} className="custom-class" testId='test'>
        <p>Test Child</p>
      </MoodCard>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(
      <MoodCard onClick={handleClick} className="custom-class"  testId='test'>
        <p>Test Child</p>
      </MoodCard>
    );

    expect(screen.getByText('Test Child').closest('div')).toHaveClass('custom-class');
  });

  it('handles onClick event', () => {
    render(
      <MoodCard onClick={handleClick} testId='test'>
        <p>Test Child</p>
      </MoodCard>
    );

    fireEvent.click(screen.getByText('Test Child').closest('div')!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
