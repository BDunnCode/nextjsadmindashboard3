import LoginForm from "@/app/ui/login/loginForm/LoginForm";
import styles from "@/app/ui/login/login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;