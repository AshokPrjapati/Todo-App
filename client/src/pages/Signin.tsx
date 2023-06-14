import { useRef } from "react";
import styles from "../styles/auth.module.css";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { login } from "../redux/auth/auth.action";
import { RootState } from "../redux/store";

const Signin = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const { signin_loading } = useSelector((store: RootState) => store.authManager)

    const dispatch: Dispatch<any> = useDispatch();

    const navigate = useNavigate();

    // handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const pass = passRef?.current?.value;

        if (email && pass) {
            if (pass.length < 6) return alert("Password length must be alteast 6");
            if (!email.includes("@") || !email.includes(".com")) {
                return alert("Invalid email")
            }
            dispatch(login({ email, pass }, navigate));
            emailRef.current.value = "";
            passRef.current.value = "";
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.heading}>Signin Form</div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={emailRef} placeholder="Enter email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passRef} placeholder="Enter password" required />
                </div>
                <div className={styles.button}>
                    <Button type="submit" label="Signin" small disabled={signin_loading} isLoading={signin_loading} loadingText="Signin..." />
                    <div>
                        <div>Don't have an account?</div>
                        <Link to="/signup">Create here</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin;