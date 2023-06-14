import { useRef } from "react";
import styles from "../styles/auth.module.css";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { signup } from "../redux/auth/auth.action";
import { RootState } from "../redux/store";

const Signup = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const { signup_loading } = useSelector((store: RootState) => store.authManager)

    const dispatch: Dispatch<any> = useDispatch();

    const navigate = useNavigate();

    // handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const name = nameRef?.current?.value;
        const pass = passRef?.current?.value;
        console.log(email, name, pass)

        if (email && pass && name) {
            if (pass.length < 6) return alert("Password length must be alteast 6");
            if (!email.includes("@") || !email.includes(".com")) {
                return alert("Invalid email")
            }
            dispatch(signup({ name, email, pass }, navigate));

            // reset form fields
            emailRef.current.value = "";
            nameRef.current.value = "";
            passRef.current.value = "";
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.heading}>Signup Form</div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref={nameRef} placeholder="Enter name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={emailRef} placeholder="Enter email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passRef} placeholder="Enter password" required />
                </div>
                <div className={styles.button}>
                    <Button type="submit" label="Signup" small disabled={signup_loading} isLoading={signup_loading} loadingText="Signup..." />
                    <div>
                        <div>Already have an account?</div>
                        <Link to="/signin">login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;