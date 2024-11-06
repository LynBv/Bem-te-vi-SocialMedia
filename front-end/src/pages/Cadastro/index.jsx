import React from "react";
import * as styles from "./Cadastro.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-bem-te-vi.svg";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome dever ser preenchido")
    .max(40, "Tamanho máx. 40 caracteres"),
  sobrenome: yup
    .string()
    .required("O sobrenome dever ser preenchido")
    .max(60, "Tamanho máx. 60 caracteres"),
  dataNascimento: yup
    .string()
    .required("A data de nascimento deve ser informada"),
  senha: yup
    .string()
    .required("A senha deve ser preenchida")
    .max(10, "Tamanho máx. 10 caracteres"),
  confirmaSenha: yup
    .string()
    .required("A senha deve ser preenchida")
    .max(10, "Tamanho máx. 10 caracteres"),
});

export default function Posts() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const cadastrar = (data) => {
    axios
      .post("http://localhost:8080/usuarios", data)
      .then(() => {
        console.log("deu tudo certo"), navigate("/login");
      })
      .catch(() => console.log("erro"));
  };

  return (
    <main>
      <div className={styles.loginContainer}>
        <h2 className={styles.title}>Criar sua conta</h2>
        <img src={Logo} alt="" className={styles.logo} />
        <form onSubmit={handleSubmit(cadastrar)}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              className={styles.error}
              type="text"
              name="nome"
              id="nome"
              {...register("nome")}
            />
            <p className={styles.error}>{errors.nome?.message}</p>
          </div>

          <div>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              id="sobrenome"
              {...register("sobrenome")}
            />
            <p className={styles.error}>{errors.sobrenome?.message}</p>
          </div>

          <div>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              id="dataNascimento"
              {...register("dataNascimento")}
            />
            <p className={styles.error}>{errors.dataNascimento?.message}</p>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" {...register("email")} />

            <p className={styles.error}>{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              {...register("senha")}
            />

            <p className={styles.error}>{errors.senha?.message}</p>
          </div>

          <div>
            <label htmlFor="confirmaSenha">ConfirmarSenha</label>
            <input
              type="password"
              name="confirmaSenha"
              id="confirmaSenha"
              {...register("confirmaSenha")}
            />

            <p className={styles.error}>{errors.confirmaSenha?.message}</p>
          </div>

          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
