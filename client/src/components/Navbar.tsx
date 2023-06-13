import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedin = useSelector(
    (store: RootState) => store.authManager.isAuth
  );
  const navigate = useNavigate();

  // handle sign click button click 
  const handleSigninButton = useCallback(() => {
    if (!isLoggedin) navigate("/signin");
  }, [isLoggedin, navigate]);

  // handle logo click
  const handleLogoClick = useCallback(() => {
    if (isLoggedin) navigate("/");
    else alert("Please login to access home page")
  }, [isLoggedin, navigate])

  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick}>
        Todo <span>App</span>
      </div>
      <Button label="Signin" action={handleSigninButton} small={true} />
    </div>
  );
};

export default Navbar;
