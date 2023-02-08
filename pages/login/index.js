import { signIn, signUp } from "@roq/nextjs";
import Image from "next/image";
import styles from "pages/login/login.module.css";

const LoginPage = function () {
    return (
        <>
            <div className={styles.center}>
                <img
                    className={styles.logo}
                    src="/roq.svg"
                    alt="ROQ Logo"
                    width={300}
                    height={200}
                    priority
                />
                <button className="btn btn-block" onClick={signUp}>
                    Register
                </button>
                <div onClick={signIn}>
                    <a href="#">Login</a>
                </div>
            </div>

            <a
                href="https://docs.roq.tech"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>Docs</h2>
                <div>https://docs.roq.tech</div>
            </a>
        </>
    );
};
export default LoginPage