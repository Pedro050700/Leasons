import React from 'react';
import { Header } from './styles';

function Dashboard() {
  return (
    <>
      <Header>
        <div className="row">
          <div class="page-title mb-4 d-flex align-items-center">
            <div class="mr-auto">
              <h3 class="dashboard">
                Home
              </h3>
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
              <div className="card-body- pt-3 pb-4">
                <div className="table-responsive">
                  <table
                    id="data_table"
                    className="table table-bordered table-striped"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Formato</th>
                        <th>Qtd.Download</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Formato</th>
                        <th>Qtd.Download</th>
                        <th>Download</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Planilha de açôes</td>
                        <td>System Architect</td>
                        <td>EXCEL</td>
                        <td>61</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Requisitos OAB</td>
                        <td>Accountant</td>
                        <td>PDF</td>
                        <td>63</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Efeitos Sonoros</td>
                        <td>Junior Technical Author</td>
                        <td>MP3</td>
                        <td>66</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Index JS</td>
                        <td>Senior Javascript Developer</td>
                        <td>Arquivo.JS</td>
                        <td>22</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Aula RH</td>
                        <td>Accountant</td>
                        <td>MP4</td>
                        <td>33</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Contratos 2020</td>
                        <td>Integration Specialist</td>
                        <td>PDF</td>
                        <td>61</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Treinamento estágio</td>
                        <td>Sales Assistant</td>
                        <td>PDF</td>
                        <td>59</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Planilha de ações</td>
                        <td>Integration Specialist</td>
                        <td>XML</td>
                        <td>55</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default Dashboard;
