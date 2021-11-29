import { Formik, Field, Form, FormikHelpers } from "formik";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import styles from '../pages/Login.module.css'



interface LoginDTO {
  usuario: string,
  senha: string
}

const Login = () => {
  const {handleLogin} = useContext<any>(AuthContext)
  return (
    <div className={styles.pageContainer}>
      <div className={styles.divH1}>
        <h1>Faça Login</h1>
      </div>
      <Formik
        initialValues={{
          usuario: '',
          senha: ''
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
              handleLogin(values);
              setSubmitting(false);
        }}
      >
        <Form >
          <div className= {styles.containerLogin}> 
            <div className= {styles.containerLoginBox}>
              <div className={styles.inputContainer}>
                <label htmlFor="usuario">Usuario</label>
                <Field id="usuario" name="usuario" placeholder="Digite o usuário" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="senha">Senha</label>
                <Field id="senha" type='password' name="senha" placeholder="Digite a senha" />
              </div>
              <button className={styles.btnEntrar} type="submit">Entrar</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;