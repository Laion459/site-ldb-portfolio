import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button Component', () => {
  const defaultProps = {
    children: 'Click me',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button with default props', () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600', 'text-white');
  });

  it('renders button with custom variant', () => {
    render(<Button {...defaultProps} variant='secondary' />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-600');
  });

  it('renders button with custom size', () => {
    render(<Button {...defaultProps} size='lg' />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('renders button with custom className', () => {
    render(<Button {...defaultProps} className='custom-class' />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<Button {...defaultProps} onClick={onClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state correctly', () => {
    render(<Button {...defaultProps} disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    // Verificar se as classes de disabled estão presentes
    expect(button).toHaveClass(
      'disabled:opacity-50',
      'disabled:pointer-events-none'
    );
  });

  it('renders all variant styles correctly', () => {
    const variants = [
      'primary',
      'secondary',
      'accent',
      'brand',
      'success',
      'warning',
      'error',
      'rose',
      'outline',
      'ghost',
      'gradient',
      'glass',
    ] as const;

    variants.forEach(variant => {
      const { unmount } = render(
        <Button {...defaultProps} variant={variant} />
      );

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      unmount();
    });
  });

  it('renders all size styles correctly', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach(size => {
      const { unmount } = render(<Button {...defaultProps} size={size} />);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      unmount();
    });
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<Button {...defaultProps} ref={ref} />);

    expect(ref).toHaveBeenCalled();
  });

  it('applies focus styles correctly', async () => {
    const user = userEvent.setup();

    render(<Button {...defaultProps} />);

    const button = screen.getByRole('button');
    await user.tab();

    expect(button).toHaveFocus();
  });

  it('renders gradient variant with special effects', () => {
    render(<Button {...defaultProps} variant='gradient' />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-gradient-to-r',
      'from-blue-600',
      'via-purple-600',
      'to-cyan-500'
    );
  });

  it('renders glass variant with backdrop blur', () => {
    render(<Button {...defaultProps} variant='glass' />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('backdrop-blur-md', 'border-white/20');
  });
});
