import React from 'react';
import api from '~/services/api';

import { getProfile, deleteProfile, addItem } from '../../lib/localstorage';

import { Header, Body, Button, PicturePreview } from './styles';

import {
  FaCloudUploadAlt,
  BsFillFolderSymlinkFill,
  RiUploadCloud2Line,
} from 'react-icons/all';

import { toast } from 'react-toastify';

import profilePictureDefault from '../../assets/imagens/avatar/avatar1.jpg';

const FILE_SIZE = 900000;

function Perfil() {
  const fileInputRef = React.useRef(null);

  const [profile, setProfile] = React.useState('');

  const [profilePicture, setProfilePicture] = React.useState({
    imagePreviewUrl: profilePictureDefault,
  });

  React.useEffect(() => {
    const { user } = getProfile();

    setProfile({
      nome: user.nome,
    });

    setProfilePicture({
      imagePreviewUrl:
        user.avatar_url == null
          ? profilePicture.imagePreviewUrl
          : user.avatar_url,
    });
  }, []);

  function selectInputFile() {
    fileInputRef.current.click();
  }

  function selectedProfilePicture(event) {
    event.preventDefault();

    const file = event.target.files[0];

    if (!file) {
      toast.error('Por favor, Selecione uma imagem');
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|bmp|gif)$/)) {
      toast.error('Ops! Formato da imagem inválido');
      return;
    }

    if (file.size > FILE_SIZE) {
      toast.error('Ops! A imagem que você está tentando enviar é muito grande');
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  async function uploadFile(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('file', profilePicture.file);

    try {
      const { data: avatar } = await api.post('/avatar', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { data: userProfile } = await api.put('/usuarios', {
        ...profile,
        avatar_id: avatar._id,
      });

      addItem(userProfile);

      toast.success('Dados atualizados com sucesso');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <Header>
        <div className="row">
          <div class="page-title mb-4 d-flex align-items-center">
            <div class="mr-auto">
              <h3 class="dashboard">Perfil</h3>
              <nav aria-label="breadcrumb" class="d-inline-block ">
                <ol class="breadcrumb p-0">
                  <li class="breadcrumb-item"></li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card card-shadow mb-4">
              <div className="card-header border-0">
                <div className="custom-title-wrap bar-primary"></div>
              </div>
              <Body>
                <div class="form-group row">
                  <div class="col-sm-3">
                    <PicturePreview
                      src={profile.avatar_url || profilePicture.imagePreviewUrl}
                      onClick={event => {
                        selectInputFile(event);
                      }}
                    ></PicturePreview>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Editar nome</label>
                  <div class="col-sm-3">
                    <input
                      type="text"
                      class="form-control form-fill"
                      placeholder="Nome"
                      value={profile.nome}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="senhaAntiga" class="col-sm-3 col-form-label">
                    Senha antiga
                  </label>
                  <div class="col-sm-3">
                    <input
                      type="password"
                      class="form-control form-fill"
                      id="senhaAntiga"
                      name="senhaAntiga"
                      placeholder="Senha antiga"
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="novaSenha" class="col-sm-3 col-form-label">
                    Nova senha
                  </label>
                  <div class="col-sm-3">
                    <input
                      type="password"
                      class="form-control form-fill"
                      id="novaSenha"
                      name="novaSenha"
                      placeholder="Nova senha"
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="confirmarSenha" class="col-sm-3 col-form-label">
                    Confirmar senha
                  </label>
                  <div class="col-sm-3">
                    <input
                      type="password"
                      class="form-control form-fill"
                      id="confirmarSenha"
                      name="confirmarSenha"
                      placeholder="Confirmar senha"
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    class="col-sm-3  col-form-label"
                    for="inputGroupFile01"
                  ></label>

                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    ref={fileInputRef}
                    hidden
                    onChange={event => {
                      selectedProfilePicture(event);
                    }}
                  />

                  <input
                    type="text"
                    id="file-name"
                    hidden
                    name="file-name"
                    placeholder="Selecione um arquivo"
                  />

                  <Button
                    onClick={event => {
                      selectInputFile(event);
                    }}
                  >
                    <BsFillFolderSymlinkFill size="22" color="#fff" />
                    Selecionar Arquivo
                  </Button>

                  <Button
                    onClick={event => {
                      uploadFile(event);
                    }}
                  >
                    <RiUploadCloud2Line size="22px" color="#fff" />
                    Enviar Arquivo
                  </Button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Salvar Alterações
                  </button>
                </div>
              </Body>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default Perfil;
