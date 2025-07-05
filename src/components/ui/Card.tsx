import { CardProps } from '@/types';

export default function Card({ title, className = '', children, ...props }: CardProps) {
  return (
    <div className={`p-4 bg-white shadow rounded-lg ${className}`} {...props}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
