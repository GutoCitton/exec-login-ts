import { useEffect,useContext } from "react";
import api from "../api";
import { PessoaContext } from "../context/PessoaContext";
import { PessoasDTO } from "../model/PessoaDTO";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import PrintPessoa from "../components/PrintPessoas";
// import { PessoaDTO } from "../model/PessoaDTO";


const Pessoa = () => {

  const { setListPessoas } = useContext(PessoaContext)

  const getListPessoas = async () => {
    const {data} = await api.get('/pessoa');
    setListPessoas(data);
  }

  useEffect(() => {
    getListPessoas();
  },[]);


  return (
    <div>
      <h1>Pessoa</h1>

      <div>
      <h1>Cadastro</h1>
      <Formik
        initialValues={{
          nome: '',
          dataNascimento: '',
          cpf: '',
          email: ''
        }}
        onSubmit={async (
          values: PessoasDTO,
          { setSubmitting }: FormikHelpers<PessoasDTO>
        ) => {
            await api.post('/pessoa', values);
            setSubmitting(false);
            await getListPessoas();
        }}

        
      >
        <Form>
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Nome" />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <Field id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="CPF" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field id="email" type='email' name="email" placeholder="E-mail" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
      <PrintPessoa attList={getListPessoas}/>
    </div>
  )
}

export default Pessoa;