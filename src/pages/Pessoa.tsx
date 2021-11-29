import { useEffect,useContext, useState } from "react";
import api from "../api";
import { PessoaContext } from "../context/PessoaContext";
import { PessoasDTO } from "../model/PessoaDTO";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';
import PrintPessoa from "../components/PrintPessoas";
import styles from './Pessoa.module.css'


const Pessoa = () => {

  const { setListPessoas, listPessoas } = useContext(PessoaContext);
  const [idEdicao, setIdEdicao] = useState<Number | null>(null);

  const getListPessoas = async () => {
    const {data} = await api.get('/pessoa');
    setListPessoas(data);
  }

  const findPessoaById = (id: Number): PessoasDTO | undefined => {
    return listPessoas.find(pessoa => pessoa.idPessoa === id)
  }

  useEffect(() => {
    getListPessoas();
  },[]);

  const FormikContext = () => {
    const formik = useFormikContext<PessoasDTO>();
    useEffect(() => {
      if (idEdicao) {
        const pessoaEdicao = findPessoaById(idEdicao);
        formik.setFieldValue('nome', pessoaEdicao?.nome || '');
        formik.setFieldValue('dataNascimento', pessoaEdicao?.dataNascimento || '');
        formik.setFieldValue('cpf', pessoaEdicao?.cpf || '');
        formik.setFieldValue('email', pessoaEdicao?.email || '');
      }
    }, [idEdicao]);
    return null;
  };

  return (
    <div>
      <h1 className={styles.h1Pessoa}>Pessoa</h1>

      <div className={styles.boxCadastro}>
      
      <Formik 
        initialValues={{
          nome: '',
          dataNascimento: '',
          cpf: '',
          email: ''
        }}

        onSubmit={async (
          values: PessoasDTO,
          { setSubmitting, resetForm }: FormikHelpers<PessoasDTO>
        ) => {
            if (idEdicao) {
              await api.put(`/pessoa/${idEdicao}`, values);
              setIdEdicao(null);
            } else {
              await api.post('/pessoa', values);
            }
            setSubmitting(false);
            await getListPessoas();
            resetForm()
        }}
      >
        <Form className={styles.boxPessoa}>
          <h1>{idEdicao ? 'Edição' : 'Cadastro'}</h1>
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Nome" />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <Field id="dataNascimento" className={styles.dataNascimento} name="dataNascimento" placeholder="Data de Nascimento" type='date' />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="CPF" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field id="email" type='email' name="email" placeholder="E-mail"/>
          </div>
          <FormikContext />
          <button className={styles.btnEnviar} type="submit">Enviar</button>
        </Form >
      </Formik>
    </div>
      <PrintPessoa attList={getListPessoas} setIdEdicao={setIdEdicao}/>
    </div>
  )
}

export default Pessoa;