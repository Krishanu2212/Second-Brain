type Variants = "primary" | "secondary";

interface ButtonProps {
    variant: Variants,
    size : "sm" | "md" | "lg",
    text: string,
    startIcon?: any,
    endIcon?: any
    onClick: () => void,
    fullWidth?: boolean,
    loading?: boolean
}

const sizeStyles = {
    "sm": "py-1 px-2 text-sm rounded-sm",
    "md": "py-2 px-4 text-md rounded-md",
    "lg": "py-4 px-6 text-lg rounded-xl"
};


const variantStyles = {
    "primary": "bg-purple-600 text-purple-200",
    "secondary": "bg-purple-300 text-purple-500"
}

const defaultStyles = "flex items-center font-semibold enabled:cursor-pointer disabled:opacity-45";

export const Button = (props: ButtonProps) => {
    return (
        <button disabled={props.loading} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full flex justify-center items-center" : null}`} onClick={props.onClick}>{props.startIcon} {props.text ? <div className="px-2">{props.text}</div> : null} {props.endIcon}</button>
    ) 
}