import React from 'react';
import { Header } from './styles';

function Templates() {
  return (
    <>
    <Header>
          <div className="page-title mb-4 d-flex align-items-center">
            <div className="mr-auto">
              
              <nav aria-label="breadcrumb" className="d-inline-block ">
                <ol className="breadcrumb p-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">DataTable</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data Table
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          
          <div class="container">

<div class="page-title mb-4 d-flex align-items-center">
    <div class="mr-auto">
        <h3 class="templates">Templates</h3>
        <nav aria-label="breadcrumb" class="d-inline-block ">
            
        </nav>
    </div>
</div>


<div class="row">
    <div class=" col-sm-6">
        <div class="card card-shadow mb-4">
            <div class="card-header border-0">
                <div class="custom-title-wrap bar-primary">
                    <div class="custom-title">Default Tree</div>
                </div>
            </div>
            <div class="card-body">
                <div id="jstree" class="jstree jstree-1 jstree-default" role="tree" aria-multiselectable="true" tabindex="0" aria-activedescendant="j1_1" aria-busy="false"><ul class="jstree-container-ul jstree-children" role="group"><li role="treeitem" data-jstree="{&quot;icon&quot;:&quot;fa fa-folder-open-o text-success&quot;}" aria-selected="false" aria-level="1" aria-labelledby="j1_1_anchor" aria-expanded="true" id="j1_1" class="jstree-node jstree-node jstree-node    jstree-open"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j1_1_anchor"><i class="jstree-icon jstree-themeicon fa fa-folder-open-o text-success jstree-themeicon-custom" role="presentation"></i>Root node 1
                            </a><ul role="group" class="jstree-children"><li role="treeitem" data-jstree="{&quot;icon&quot;:&quot;fa fa-folder-o text-danger&quot;}" aria-selected="false" aria-level="2" aria-labelledby="j1_2_anchor" id="j1_2" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j1_2_anchor"><i class="jstree-icon jstree-themeicon fa fa-folder-o text-danger jstree-themeicon-custom" role="presentation"></i>Child node 1</a></li><li role="treeitem" data-jstree="{&quot;icon&quot;:&quot;fa fa-folder-o text-warning&quot;}" aria-selected="false" aria-level="2" aria-labelledby="j1_3_anchor" id="j1_3" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j1_3_anchor"><i class="jstree-icon jstree-themeicon fa fa-folder-o text-warning jstree-themeicon-custom" role="presentation"></i>Child node 2</a></li><li role="treeitem" data-jstree="{&quot;icon&quot;:&quot;fa fa-folder-o text-purple&quot;}" aria-selected="false" aria-level="2" aria-labelledby="j1_4_anchor" id="j1_4" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_4_anchor"><i class="jstree-icon jstree-themeicon fa fa-folder-o text-purple jstree-themeicon-custom" role="presentation"></i>Child node 3</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="j1_5_anchor" aria-expanded="true" id="j1_5" class="jstree-node jstree-node jstree-node   jstree-last  jstree-last jstree-open jstree-last"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j1_5_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 3
                                    </a><ul role="group" class="jstree-children"><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j1_6_anchor" id="j1_6" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_6_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 1</a></li><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j1_7_anchor" aria-expanded="false" id="j1_7" class="jstree-node jstree-node jstree-node    jstree-closed"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_7_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 2
                                            </a></li><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j1_10_anchor" id="j1_10" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_10_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 3</a></li><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j1_11_anchor" id="j1_11" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-last jstree-leaf jstree-last jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_11_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 4</a></li></ul></li></ul></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="j1_12_anchor" aria-expanded="false" id="j1_12" class="jstree-node jstree-node jstree-node   jstree-last  jstree-last jstree-closed jstree-last"><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j1_12_anchor"><i class="jstree-icon jstree-themeicon" role="presentation"></i>Root node 2
                            </a></li></ul></div>
            </div>
        </div>
    </div>
    <div class=" col-sm-6">
        <div class="card card-shadow mb-4">
            <div class="card-header border-0">
                <div class="custom-title-wrap bar-danger">
                    <div class="custom-title">Checkable Tree</div>
                </div>
            </div>
            <div class="card-body">
                <div id="jstree-checkbox" class="jstree jstree-2 jstree-default jstree-default-large jstree-checkbox-no-clicked jstree-checkbox-selection" role="tree" aria-multiselectable="true" tabindex="0" aria-activedescendant="j2_1" aria-busy="false"><ul class="jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-dots" role="group"><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="j2_1_anchor" aria-expanded="true" id="j2_1" class="jstree-node jstree-node jstree-node    jstree-open"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j2_1_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Root node 1
                            </a><ul role="group" class="jstree-children"><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="j2_2_anchor" id="j2_2" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j2_2_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 1</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="j2_3_anchor" id="j2_3" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j2_3_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 2</a></li><li role="treeitem" aria-selected="false" aria-level="2" aria-labelledby="j2_4_anchor" aria-expanded="true" id="j2_4" class="jstree-node jstree-node jstree-node   jstree-last  jstree-last jstree-open jstree-last"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor jstree-anchor" href="#" tabindex="-1" id="j2_4_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 3
                                    </a><ul role="group" class="jstree-children"><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j2_5_anchor" id="j2_5" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-leaf jstree-leaf"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j2_5_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 1</a></li><li role="treeitem" aria-selected="false" aria-level="3" aria-labelledby="j2_6_anchor" id="j2_6" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-last jstree-leaf jstree-last jstree-leaf jstree-last"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j2_6_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Child node 2</a></li></ul></li></ul></li><li role="treeitem" aria-selected="false" aria-level="1" aria-labelledby="j2_7_anchor" id="j2_7" class="jstree-node jstree-node jstree-node  jstree-leaf jstree-last jstree-leaf jstree-last jstree-leaf jstree-last"><div unselectable="on" role="presentation" class="jstree-wholerow">&nbsp;</div><i class="jstree-icon jstree-ocl" role="presentation"></i><a class="jstree-anchor  jstree-anchor  jstree-anchor" href="#" tabindex="-1" id="j2_7_anchor"><i class="jstree-icon jstree-checkbox" role="presentation"></i><i class="jstree-icon jstree-themeicon" role="presentation"></i>Root node 2</a></li></ul></div>
            </div>
        </div>
    </div>

</div>

</div>

 </Header>
    </>
  );
}

export default Templates;
