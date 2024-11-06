import React from "react";
import * as styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationLogin = yup.object().shape({
  username: yup.string().required("Digite seu email"),
  password: yup.string().required("Digite sua senha"),
});

export default function Login() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationLogin) });

  const logar = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      const token = response.headers["authorization"];

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(logar)}>
        <div>
          <label>Email:</label>
          <input type="text" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
