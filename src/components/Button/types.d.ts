export type VariantProps = 'outlined' | 'text' | 'contained';
export type SizeProps = 'small'  | 'medium' | 'large';
export type ButtonTypeProps = 'submit' | 'button';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string
    variant?: VariantProps
    size?: SizeProps
    type?: ButtonTypeProps
    fullwidth?: boolean
    loading?: boolean
    loandingWithContainer?: boolean
}