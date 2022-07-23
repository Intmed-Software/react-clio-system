export type Theme = 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';

export interface AlertProps {
    variant: Theme;
    message: string;
    onclose?: ()=> any;
}