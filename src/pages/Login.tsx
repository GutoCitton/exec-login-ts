import { Formik, Field, Form, FormikHelpers } from "formik";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



interface LoginDTO {
  usuario: string,
  senha: string
}

const Login = () => {
  const {handleLogin} = useContext<any>(AuthContext)
  return (
    <div>
      <h1>Login Cogumelo</h1>
      <Formik
        initialValues={{
          usuario: '',
          senha: ''
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              handleLogin(values);
              setSubmitting(false);
            }, 500);
        }}
      >
        <Form>
          <div>
            <label htmlFor="usuario">Usuario: </label>
            <Field id="usuario" name="usuario" placeholder="Digite o usuário" />
          </div>
          <div>
            <label htmlFor="senha">Senha: </label>
            <Field id="senha" type='password' name="senha" placeholder="Digite a senha" />
          </div>
          <button type="submit">Logar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;