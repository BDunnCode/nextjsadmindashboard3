import styles from "@/app/ui/login/login.module.css"
import { authenticate } from "../lib/actions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.formContainer}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button>Login</button>
    </form>

    </div>
  );
};

export default LoginPage;