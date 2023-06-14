import styles from "../styles/Modal.module.css"
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal = ({ isOpen, onClose, onSubmit, title, body, actionLabel, disabled }: ModalProps) => {
    if (!isOpen) return null;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div>{body}</div>
                <div className={styles.actions}>
                    <Button label="Close" action={onClose} small />
                    <Button label={actionLabel} action={onSubmit} disabled={disabled} small />
                </div>
            </div>
        </div>
    )
}

export default Modal