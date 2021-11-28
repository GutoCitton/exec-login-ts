import React, { useContext } from 'react'
import api from '../api'
import { PessoaContext } from '../context/PessoaContext'
// import { Formik, Field, Form, FormikHelpers } from 'formik';
interface Props {
  attList: Function
}

const PrintPessoa: React.FC<Props> = ({attList}) => {
  const { listPessoas } = useContext(PessoaContext)


  const deletePessoa = async (idPessoa: Number) => {
    await api.delete(`/pessoa/${idPessoa}`);
    await attList()
  }


  return (
    <div>
      {listPessoas.map((pessoa) => (
        <div key={pessoa.idPessoa} style={{margin: 20}}>
          <p>{pessoa.nome}</p>
          <p>{pessoa.cpf}</p>
          <p>{pessoa.dataNascimento}</p>
          <p>{pessoa.email}</p>
          <button onClick={() => deletePessoa(pessoa.idPessoa)}>Apagar</button>
          {/* <button onClick={() => editPessoa(pessoa.idPessoa)}>Editar</button> */}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default PrintPessoa;