import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  helperText?: string;
}
