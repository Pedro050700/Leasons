import React from 'react';
import { Header } from './styles';

function Licoes() {
  return (
    <>
      <Header>
        <link
          href="./assets/vendor/dropzone/dropzone.min.css"
          rel="stylesheet"
        />
        <div className="row">
          <div class="page-title mb-4 d-flex align-items-center">
            <div class="mr-auto">
              <h3 class="licoes">Lições Aprendidas</h3>
              <nav aria-label="breadcrumb" class="d-inline-block ">
                <ol class="breadcrumb p-0">
                  <li class="breadcrumb-item"></li>
                </ol>
              </nav>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12">
              <div class="card card-shadow mb-4">
                <div class="card-header border-0">
                  <div class="custom-title-wrap bar-primary">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Adicionar Lição
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">
                              Lições Aprendidas
                            </h4>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>

                          <input
                            type="email"
                            class="form-control"
                            id="Autor"
                            aria-describedby="AutorHelp"
                            placeholder="Autor"
                          />
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Título da lição "
                              aria-label="Título"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Categoria
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  Tributos
                                </a>
                                <a class="dropdown-item" href="#">
                                  Templates
                                </a>
                                <a class="dropdown-item" href="#">
                                  Exemplo
                                </a>
                                <div
                                  role="separator"
                                  class="dropdown-divider"
                                ></div>
                                <a class="dropdown-item" href="#">
                                  Link
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="card-body">
                              <form
                                class="dropzone dropzone-primary dz-clickable"
                                id="multiFileUpload"
                                action="/upload.php"
                              >
                                <div class="dz-message needsclick">
                                  <h5>Drop files here or click to upload.</h5>
                                  <span class="note needsclick">
                                    (This is just a demo dropzone. Selected
                                    files are <strong>not</strong> actually
                                    uploaded.)
                                  </span>
                                </div>
                              </form>
                            </div>
                            <div>...</div>
                            <div class="form-group">
                              <label for="exampleFormControlTextarea1">
                                Comentário:
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Fechar
                            </button>
                            <button type="button" class="btn btn-primary">
                              Salvar lição
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body- pt-3 pb-4">
                  <div class="table-responsive">
                    <div
                      id="data_table_wrapper"
                      class="dataTables_wrapper container-fluid dt-bootstrap4"
                    >
                      <div class="row">
                        <div class="col-sm-12 col-md-6">
                          <div class="dataTables_length" id="data_table_length">
                            <label>
                              Show
                              <select
                                name="data_table_length"
                                aria-controls="data_table"
                                class="form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                              entries
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div id="data_table_filter" class="dataTables_filter">
                            <label>
                              Search:
                              <input
                                type="search"
                                class="form-control form-control-sm"
                                placeholder=""
                                aria-controls="data_table"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table
                            id="data_table"
                            class="table table-bordered table-striped dataTable"
                            data-toggle="modal"
                            role="grid"
                            aria-describedby="data_table_info"
                            cellspacing="0"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  class="sorting_asc"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Título: activate to sort column descending"
                                >
                                  Título
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Autor: activate to sort column ascending"
                                >
                                  Autor
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Nome do arquivo: activate to sort column ascending"
                                >
                                  Nome do arquivo
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Qtd.Download: activate to sort column ascending"
                                >
                                  Qtd.Download
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Editar: activate to sort column ascending"
                                >
                                  Editar
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Download: activate to sort column ascending"
                                >
                                  Download
                                </th>
                              </tr>
                            </thead>

                            <tfoot>
                              <tr>
                                <th rowspan="1" colspan="1">
                                  Título
                                </th>
                                <th rowspan="1" colspan="1">
                                  Autor
                                </th>
                                <th rowspan="1" colspan="1">
                                  Nome do arquivo
                                </th>
                                <th rowspan="1" colspan="1">
                                  Qtd.Download
                                </th>
                                <th rowspan="1" colspan="1">
                                  Editar
                                </th>
                                <th rowspan="1" colspan="1">
                                  Download
                                </th>
                              </tr>
                            </tfoot>
                            <tbody>
                              <tr role="row" class="odd">
                                <td class="sorting_1">Aula RH</td>
                                <td>Accountant</td>
                                <td>MP4</td>
                                <td>33</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">Contratos 2020</td>
                                <td>Integration Specialist</td>
                                <td>PDF</td>
                                <td>61</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">Efeitos Sonoros</td>
                                <td>Junior Technical Author</td>
                                <td>MP3</td>
                                <td>66</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">Index JS</td>
                                <td>Senior Javascript Developer</td>
                                <td>Arquivo.JS</td>
                                <td>22</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">Planilha de açôes</td>
                                <td>System Architect</td>
                                <td>EXCEL</td>
                                <td>61</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">Planilha de ações</td>
                                <td>Integration Specialist</td>
                                <td>XML</td>
                                <td>55</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">Requisitos OAB</td>
                                <td>Accountant</td>
                                <td>PDF</td>
                                <td>63</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1">Treinamento estágio</td>
                                <td>Sales Assistant</td>
                                <td>PDF</td>
                                <td>59</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-success"
                                  >
                                    Editar
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-outline-primary"
                                  >
                                    Download
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12 col-md-5">
                          <div
                            class="dataTables_info"
                            id="data_table_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 1 to 8 of 8 entries
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                          <div
                            class="dataTables_paginate paging_simple_numbers"
                            id="data_table_paginate"
                          >
                            <ul class="pagination">
                              <li
                                class="paginate_button page-item previous disabled"
                                id="data_table_previous"
                              >
                                <a
                                  href="#"
                                  aria-controls="data_table"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  class="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li class="paginate_button page-item active">
                                <a
                                  href="#"
                                  aria-controls="data_table"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  class="page-link"
                                >
                                  1
                                </a>
                              </li>
                              <li
                                class="paginate_button page-item next disabled"
                                id="data_table_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="data_table"
                                  data-dt-idx="2"
                                  tabindex="0"
                                  class="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-header border-0">
            <div className="custom-title-wrap bar-primary"></div>
          </div>
          <div className="card-body- pt-3 pb-4"></div>
        </div>
      </Header>
    </>
  );
}

export default Licoes;
