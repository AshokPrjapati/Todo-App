import styles from "../styles/Button.module.css";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    label: string,
    action?: () => void,
    small?: boolean,
    disabled?: boolean,
    isLoading?: boolean,
    loadingText?: string
}

const Button = ({
    type = "button",
    label,
    action,
    small,
    disabled = false,
    isLoading = false,
    loadingText = label
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={small ? styles.small_button : styles.default_button}
            onClick={action}
            disabled={disabled}
        >
            {isLoading ? loadingText : label}
        </button>
    );
};

export default Button;
