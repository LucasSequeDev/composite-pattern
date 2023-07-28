import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'font-bold rounded-lg',
    variants: {
        variant: {
            default: 'bg-blue-500 hover:bg-blue-700 text-white',
            success: 'bg-green-800 hover:bg-green-900 text-cyan-100',
            light: 'bg-cyan-100 hover:bg-green-200 text-green-800'
        },
        size: {
            default: 'h-10 py-2 px-4',
            small: 'h-8 py-1 px-2',
            large: 'h-12 py-3 px-6'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

export function Button({ children, variant, size, className, ...restOfProps }: ButtonProps) {
    return(
        <button 
            {...restOfProps} 
            className={button({ variant, size, className } )}
        >
            {children}
        </button>
    )
}