import styles from "../styles/Button.module.css";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    label: string,
    action: () => void,
    small?: boolean,
    disabled?: boolean
}

const Button = ({
    type = "button",
    label,
    action,
    small,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={small ? styles.small_button : styles.default_button}
            onClick={action}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
