import React from 'react';

import { toast } from 'react-toastify';

import api from '~/services/api';

import history from '~/services/history';

import { Wrapper } from './styles.js';

function SignIn() {
  const [usuario, setUsuario] = React.useState({
    email: '',
    senha: '',
  });

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
      const { data } = await api.post('/sessions', usuario);

      if (!data) {
        toast.error('Email ou Senha Inválidos');
        return;
      }

      const parsedJson = JSON.stringify(data);
      localStorage.setItem('@licoes-aprendidas', parsedJson);

      toast.success(`Seja Bem-vindo(a), ${data.user.email}`);
      history.push('/dashboard');
    } catch (err) {
      console.log(err.message);
      toast.error('Erro ao autenticar');
    }
  };

  return (
    <Wrapper>
      <div className="login-form">
        <img
          className="pr-3 float-left"
          srcSet="../assets/img/logo-icon@2x.png 2x"
          src="../assets/img/logo2.png"
          alt=""
          margin-top="2px"
          height="80px"
        />
        <h4 className="text-uppercase text-purple text-center mb-5">
          Gestão
          <br />
          do
          <br />
          Conhecimento
        </h4>

        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={usuario.email}
              placeholder="Digite seu email"
              onChange={event => {
                onHandleChange(event);
              }}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              id="senha"
              name="senha"
              value={usuario.senha}
              placeholder="Digite sua senha"
              onChange={event => {
                onHandleChange(event);
              }}
            />
          </div>

          <div className="form-group clearfix">
            <a href="#" className="float-left forgot-link my-2">
              Esqueceu a Senha?
            </a>
            <a href="">
              <button
                onClick={event => {
                  userSign(event);
                }}
                type="submit"
                className="btn btn-purple float-right"
              >
                Entrar
              </button>
            </a>
          </div>

          <div className="form-divider" />

          <a href="#" className="btn btn-facebook text-uppercase">
            <i className="fa fa-facebook-square" />
            Entrar com Facebook
          </a>

          <div className="text-center mt-4">
            <a href="/signup" className="btn-link text-capitalize f12">
              Criar Conta
            </a>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default SignIn;
