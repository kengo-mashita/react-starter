import { cn } from '@/utils';
import type { ButtonProps } from '@/types';

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',

        // Variants
        variant === 'primary' &&
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
        variant === 'outline' &&
          'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-500',

        // Sizes
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-10 px-4',
        size === 'lg' && 'h-11 px-8 text-lg',

        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
}
