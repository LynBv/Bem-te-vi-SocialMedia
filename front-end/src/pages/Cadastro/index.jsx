import React from "react";
import * as styles from "./Cadastro.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        console.log("deu tudo certo"), navigate("/");
      })
      .catch(() => console.log("erro"));
  };

  return (
    <div>
      <main>
        <div className={styles.cardPost}>
          <div className={styles.cardBodyPost}>
          <h3 className={styles.criarConta}>Criar sua conta</h3>
            <form onSubmit={handleSubmit(cadastrar)}>
              <div className={styles.fields}>
                <label htmlFor="nome">Nome</label>
                <input className={styles.camposTexto}
                  type="text"
                  name="nome"
                  id="nome"
                  {...register("nome")}
                />
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                  type="text"
                  name="sobrenome"
                  id="sobrenome"
                  {...register("sobrenome")}
                />
                <p className={styles.errorMessage}>
                  {errors.sobrenome?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input
                  type="date"
                  name="dataNascimento"
                  id="dataNascimento"
                  {...register("dataNascimento")}
                  />
        
                <p className={styles.errorMessage}>
                  {errors.dataNascimento?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="email">Email</label>
                  <input
                  type="text"
                  name="email"
                  id="email"
                  {...register("email")}

                  />
  
                <p className={styles.errorMessage}>
                  {errors.email?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="senha">Senha</label>
              <input
                  type="password"
                  name="senha"
                  id="senha"
                  {...register("senha")}

                  />

                <p className={styles.errorMessage}>
                  {errors.senha?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="confirmaSenha">ConfirmarSenha</label>
                  <input
                  type="password"
                  name="confirmaSenha"
                  id="confirmaSenha"
                  {...register("confirmaSenha")}
                  />

                <p className={styles.errorMessage}>
                  {errors.confirmaSenha?.message}
                </p>
              </div>

              <div>
                <button className={styles.buttonCadastrar} type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}