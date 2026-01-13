import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-cinematic disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-white shadow-glow hover:bg-primary-dark hover:shadow-glow-lg hover:-translate-y-0.5',
      secondary: 'bg-transparent text-cream border border-cream/20 hover:border-primary hover:text-primary-light',
      outline: 'bg-transparent text-primary border border-primary/30 hover:bg-primary hover:text-white hover:border-primary',
      ghost: 'text-cream hover:bg-white/5'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
