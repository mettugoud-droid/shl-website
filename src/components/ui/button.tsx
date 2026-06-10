import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-white hover:bg-secondary-600 shadow-soft hover:shadow-glow',
        primary:
          'bg-primary text-white hover:bg-primary-700 shadow-soft hover:shadow-medium',
        outline:
          'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
        'outline-light':
          'border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary',
        ghost:
          'hover:bg-accent text-primary hover:text-primary-700',
        link:
          'text-secondary underline-offset-4 hover:underline',
        destructive:
          'bg-error text-white hover:bg-red-600',
        whatsapp:
          'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-soft',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-13 px-8 py-3.5 text-base',
        xl: 'h-14 px-10 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
