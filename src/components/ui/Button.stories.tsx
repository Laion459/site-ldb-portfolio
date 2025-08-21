import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Button reutilizável com múltiplas variantes, tamanhos e estados.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
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
      ],
      description: 'Estilo visual do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado',
    },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Clique aqui',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botão Primário',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botão Secundário',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Botão Accent',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Botão Brand',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Sucesso',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Atenção',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Erro',
  },
};

export const Rose: Story = {
  args: {
    variant: 'rose',
    children: 'Botão Rose',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Botão Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Botão Ghost',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Botão Gradient',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Botão Glass',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Pequeno',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Médio',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Grande',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Grande',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Desabilitado',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          className='w-4 h-4 mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
        Adicionar Item
      </>
    ),
    variant: 'success',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4 max-w-4xl'>
      {(
        [
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
        ] as const
      ).map(variant => (
        <Button key={variant} variant={variant} size='md'>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes do botão em uma grade para comparação visual.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
        <Button key={size} size={size}>
          {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tamanhos disponíveis para o botão.',
      },
    },
  },
};
