import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  Wrapper,
  Header,
  Form,
  FormGroup,
  Input,
  SignUpButton,
  SignUpContent,
  SignUpGroup,
  SocialSignUp,
} from './styles.js';

function SignUp() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    cargo: '',
    senha: '',
    confirmarSenha: '',
  });

  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const listProfessions = async () => {
      const cargosResponse = await api.get('/cargos');

      setCargos(cargosResponse.data);
    };

    listProfessions();
  }, []);

  const onHandleChange = event => {
    event.preventDefault();

    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

  const userSign = async event => {
    event.preventDefault();

    try {
      await api.post('/usuarios', usuario, {
        headers: { 'Content-Type': 'application/json' },
      });

      history.push('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Wrapper>
        <Form>
          <Header>
            <img
              className="pr-3 float-left"
              srcSet="../assets/img/logo-icon@2x.png 2x"
              src="../assets/img/logo2.png"
              alt=""
              margin-top="2px"
              height="80px"
            />
            <h2 className="text-purple text-center mb-4">Criar Conta </h2>
          </Header>

          <FormGroup>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={usuario.nome}
              placeholder="Digite seu nome completo"
              onChange={event => {
                onHandleChange(event);
              }}
            />
            <Input
              type="email"
              id="email"
              name="email"
              value={usuario.email}
              placeholder="Digite seu email"
              onChange={event => {
                onHandleChange(event);
              }}
            />
            <Input
              type="password"
              id="senha"
              name="senha"
              value={usuario.senha}
              placeholder="Digite sua senha"
              onChange={event => {
                onHandleChange(event);
              }}
            />

            <Input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={usuario.confirmarSenha}
              placeholder="Confirme sua senha"
              onChange={event => {
                onHandleChange(event);
              }}
            />

            <div class="btn-group mb-4">
              <button
                type="button"
                class="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {usuario.cargo ? usuario.cargo : 'Selecione um Cargo'}
              </button>
              <div class="dropdown-menu">
                {cargos.map(cargo => (
                  <a
                    key={cargo._id}
                    class="dropdown-item"
                    onClick={() => {
                      setUsuario({ ...usuario, cargo: cargo.name });
                    }}
                    href="#"
                  >
                    {cargo.name}
                  </a>
                ))}
              </div>
            </div>
          </FormGroup>

          <SignUpContent>
            <SignUpGroup>
              <SignUpButton
                onClick={event => {
                  userSign(event);
                }}
                type="button"
                className="btn btn-purple"
              >
                inscrever-se
              </SignUpButton>

              <a href="#" className="float-left forgot-link my-2">
                Esqueceu a Senha?
              </a>
            </SignUpGroup>

            <div className="form-divider" />

            <SocialSignUp>
              <a href="#" className="btn btn-facebook text-uppercase">
                <i className="fa fa-facebook-square" />
                &nbsp; &nbsp; &nbsp; &nbsp; Entrar com Facebook
              </a>

              <div className="text-center">
                <a href="/" className="btn-link text-capitalize f12">
                  Acessar Conta
                </a>
              </div>
            </SocialSignUp>
          </SignUpContent>
        </Form>
      </Wrapper>
    </>
  );
}

export default SignUp;
