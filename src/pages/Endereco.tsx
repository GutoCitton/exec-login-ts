import {EnderecoDTO} from '../model/EnderecoDTO'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import styles from './Endereco.module.css'


const Endereco = () => {
  const handleClick = async (value: string) => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${value}/json/`)
    await setInitialValues({
      cep: data.cep,
      cidade: data.localidade,
      complemento: data.complemento,
      estado: data.uf,
      logradouro: data.logradouro,
      numero: 0,
      bairro: data.bairro,
    })
    console.log(data)
  }

  const[initialValues, setInitialValues] = useState({
    cep: '',
    cidade: '',
    complemento: '',
    estado: '',
    logradouro: '',
    numero: 0,
    bairro: '',
  })

  return (
    <div>
      <div className={styles.h1EnderecoContainer}>
        <h1 className={styles.h1Endereco}>Endereco</h1>
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize = {true}
        onSubmit={(
          values: EnderecoDTO,
          { setSubmitting }: FormikHelpers<EnderecoDTO>
        ) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {props => (
          <Form>
            <div className={styles.enderecoContainer}>
              <div className={styles.enderecoBox}>
                <div>
                  <label htmlFor="cep">Buscar pelo CEP</label>
                  <div>
                    <Field id="cep" name="cep" placeholder="CEP" />
                    <button  onClick= {() => handleClick(props.values.cep)} >Buscar</button> 
                  </div>
                </div>
                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <Field id="cidade" name="cidade" placeholder="Cidade" />
                </div>
                <div>
                  <label htmlFor="logradouro">Logradouro</label>
                  <Field id="logradouro" name="logradouro" placeholder="Logradouro" />
                </div>
                <div>
                  <label htmlFor="complemento">Complemento</label>
                  <Field id="complemento" name="complemento" placeholder="Complemento" />
                </div>
                <div>
                  <label htmlFor="bairro">Bairro</label>
                  <Field id="bairro" name="bairro" placeholder="Bairro" />
                </div>
                <div>
                  <label htmlFor="estado">Estado</label>
                  <Field id="estado" name="estado" placeholder="Estado" />
                </div>
                <div>
                  <label htmlFor="numero">Numero</label>
                  <Field id="numero" name="numero" placeholder="Numero" />
                </div>
              </div>
              </div>

          </Form>

        )}
      </Formik>
      <div>
        
      </div>
    </div>
  )}
    export default Endereco;



    