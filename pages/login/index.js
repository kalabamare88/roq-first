import { signIn, signUp } from "@roq/nextjs";
import Image from "next/image";
import styles from "pages/login/login.module.css";
import { withAuth } from "components/auth/with-auth";

const LoginPage = function () {
    return (
        <>
            <div className={styles.center}>

                <div className={styles.buttonG} onClick={signUp}>
                    <a href="#">Register</a>
                </div>
                <div onClick={signIn} className={styles.buttonG}>
                    <a href="#">Login</a>
                </div>
            </div>

        </>
    );
};
export default withAuth({ redirectIfAuthenticated: true, redirectTo: "/" })(
    LoginPage
);
