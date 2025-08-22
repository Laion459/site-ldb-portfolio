import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button Component', () => {
  it('renders button with correct text and classes', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600', 'text-white');
  });

  it('applies disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Button' });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-blue-600'); // Primary variant
  });

  it('applies custom size classes', () => {
    render(<Button size='lg'>Large Button</Button>);
    const button = screen.getByRole('button', { name: 'Large Button' });

    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Button</Button>);
    const button = screen.getByRole('button', { name: 'Custom Button' });

    expect(button).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button', { name: 'Clickable Button' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    const { rerender } = render(
      <Button variant='outline'>Outline Button</Button>
    );

    let button = screen.getByRole('button', { name: 'Outline Button' });
    expect(button).toHaveClass('border-2', 'border-blue-600', 'text-blue-600');

    rerender(<Button variant='ghost'>Ghost Button</Button>);
    button = screen.getByRole('button', { name: 'Ghost Button' });
    expect(button).toHaveClass('bg-transparent', 'text-gray-700');

    rerender(<Button variant='glass'>Glass Button</Button>);
    button = screen.getByRole('button', { name: 'Glass Button' });
    expect(button).toHaveClass('backdrop-blur-md', 'border-white/20');
  });

  it('handles focus states', () => {
    render(<Button>Focusable Button</Button>);
    const button = screen.getByRole('button', { name: 'Focusable Button' });

    button.focus();
    expect(button).toHaveFocus();
  });
});
