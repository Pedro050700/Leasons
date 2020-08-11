import React from 'react';
import { Header, Title } from './styles';

function Categorias() {
  return (
    <>
       

       
          <Header>
          <div className="row ;">
          <div class="page-title mb-4 d-flex align-items-center">
              <div class="mr-auto">
                  <h3 class="categorias">Categorias</h3>
                  <nav aria-label="breadcrumb" class="d-inline-block ">
                      <ol class="breadcrumb p-0">
                          <li class="breadcrumb-item"></li>
                          
                          
                      </ol>
                  </nav>
              </div>
          </div>
          <div class="col-xl-12 ">
            <div class="card card-shadow mb-4">

           
             
                <div class="custom-title-wrap bar-primary">
               
                  <div class="card-body">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend"></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Descrição da categoria"
                        aria-label="Username"
                      />
                    </div>
                    <button type="button" class="btn btn-success rounded-0">
                      Adicionar Categorias
                    </button>
                  </div>
                </div>
                <div class="card-body- pt-3 pb-4">
                  <div class="table-responsive">
                    <div
                      id="data_table_wrapper"
                      class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12 col-md-6">
                          <div class="dataTables_length" id="data_table_length">
                            <label
                              >Show
                              <select
                                name="data_table_length"
                                aria-controls="data_table"
                                class="form-control form-control-sm"
                                ><option value="10">10</option
                                ><option value="25">25</option
                                ><option value="50">50</option
                                ><option value="100">100</option></select
                              >
                              entries</label
                            >
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div id="data_table_filter" class="dataTables_filter">
                            <label
                              >Search:<input
                                type="search"
                                class="form-control form-control-sm"
                                placeholder=""
                                aria-controls="data_table"
                            /></label>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table
                            id="data_table"
                            class="table table-bordered table-striped dataTable no-footer"
                            role="grid"
                            aria-describedby="data_table_info"
                            cellspacing="0"
                          >
                            <thead>
                              <tr role="row ">
                                <th
                                  class="sorting_asc "
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"
                                 
                                  aria-sort="ascending"
                                  aria-label="ID: activate to sort column descending"
                                >
                                  ID
                                </th>
                                <th
                                  class="sorting "
                                  tabindex="0"
                                  aria-controls="data_table"
                                  rowspan="1"
                                  colspan="1"

                                  aria-label="Descrição: activate to sort column ascending"
                                >
                                  Descrição
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr role="row" class="odd">
                                <td class="sorting_1 ;">1</td>
                                <td>Exemplos</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1 ;">2</td>
                                <td>Tributos</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1 ;">3</td>
                                <td>Templates</td>
                              </tr>
                              <tr role="row" class="even">
                                <td class="sorting_1 ">4</td>
                                <td>Planilha de ações</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td class="sorting_1">5</td>
                                <td>Documentos OAB</td>
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
                            Showing 1 to 5 of 5 entries
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
                                  >Previous</a
                                >
                              </li>
                              <li class="paginate_button page-item active">
                                <a
                                  href="#"
                                  aria-controls="data_table"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  class="page-link"
                                  >1</a
                                >
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
                                  >Next</a
                                >
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
          </Header>
         
        
    </>
  );
}

export default Categorias;