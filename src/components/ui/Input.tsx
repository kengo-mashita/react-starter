import { InputProps } from '@/types';

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
