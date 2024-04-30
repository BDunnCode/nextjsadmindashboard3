"use client";

import { authenticate } from "@/app/lib/actions";
// import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const LoginForm = () => {
  const [err, setErr] = useState();

  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error)
  }
  return (
    <form action={handleLogin} className={styles.formContainer}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username"></input>
      <input type="text" placeholder="password" name="password"></input>
      <button>Login</button>
      {err && err}
    </form>
  );
};

export default LoginForm;