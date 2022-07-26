export type VariantProps = 'outlined' | 'text' | 'contained';
export type SizeProps = 'small'  | 'medium' | 'large';
export type ButtonTypeProps = 'submit' | 'button';

export interface AccordionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    content?: string;
    variant?: VariantProps;
    isActive?: boolean
    size?: SizeProps;
    type?: ButtonTypeProps;
    fullwidth?: boolean;
    loading?: boolean;
}