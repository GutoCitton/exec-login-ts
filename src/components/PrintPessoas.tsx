import React, { useContext } from 'react';
import api from '../api';
import { PessoaContext } from '../context/PessoaContext';
import moment from 'moment';
import styles from './PrintPessoa.module.css';
interface Props {
  attList: Function;
  setIdEdicao: Function;
}

const PrintPessoa: React.FC<Props> = ({attList, setIdEdicao}) => {
  const { listPessoas } = useContext(PessoaContext);

  const deletePessoa = async (idPessoa: Number) => {
    await api.delete(`/pessoa/${idPessoa}`);
    await attList();
  }

  return (
    <div>
      {listPessoas.map((pessoa) => (
        <div className={styles.boxPessoa} key={pessoa.idPessoa} style={{margin: 20}}>
          <div>
            <p>Nome:&nbsp;{pessoa.nome}</p>
            <p>CPF:&nbsp;{pessoa.cpf}</p>
            <p>Data de Nascimento:&nbsp;{moment(pessoa.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY') }</p>
            <p>E-mail:&nbsp;{pessoa.email}</p>
          <button className={styles.btnApagar} onClick={() => deletePessoa(pessoa.idPessoa)}>Apagar</button>
          <button className={styles.btnApagar} onClick={() => setIdEdicao(pessoa.idPessoa)}>Editar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrintPessoa;