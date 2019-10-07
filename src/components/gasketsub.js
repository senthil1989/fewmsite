import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';
import Inquirybtn from './inquirybtn';
import Imgfunction from "../common/images";

const subcontent1={
    title:{header:'Etcher'},
    para:{para:"Special sheets, gaskets and localized items"} 
}

function GasketComponent(){
return(
    <>
        <CommonTitle title={"FLEX / DX / EX+ Localized Gasket Parts"} />
        <div>
        <GastextComponent subcontent={subcontent1} /> 
        </div>

        <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction('gasket1')}
              <figcaption class="figure-caption">857-085550-026 <br/>
                GASKET_Elctrode gasket</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket2')}
              <figcaption class="figure-caption">ES3D10-404449-11 <br/>
PROCESS KIT_SHEET, OUTER COOLING PL</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket3')}
              <figcaption class="figure-caption">857-027108-001 <br/>
                GASKET_CHOKE RING</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction('gasket4')}
              <figcaption class="figure-caption">719-078253-060 <br/>
              SHEET_PKG, GASKET, GEL, CER</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket5')}
              <figcaption class="figure-caption">713-069935-003 <br/>
              GASKET_KAPTON SHIM ON TCP</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket6')}
              <figcaption class="figure-caption">857-072806-005 <br/>
              GASKET_SHIELD GASKET_ROUND_TEFLON</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction('gasket7')}
              <figcaption class="figure-caption">857-073299-001 <br/>
              GASKET_SEAL CHOKE RING CORE</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket8')}
              <figcaption class="figure-caption">857-073299-002<br/>
              GASKET_FLEX EX Q-PAD KET</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket9')}
              <figcaption class="figure-caption">713-072792-003 <br/>
              GASKET_KAPTON SHIM ON ELECTRODE</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction('gasket10')}
              <figcaption class="figure-caption">857-073710-002<br/>
              GASKET_CIRLEX GASKET SET</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket11')}
              <figcaption class="figure-caption">34-267621-00<br/>
              LAMP_LAMPHALOGEN 230V 1.5KW WHT</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('gasket12')}
              <figcaption class="figure-caption">80021-86747<br/>
              GUIDE_NEW TYPE LIFT PIN GUIDE, ESC</figcaption>
            </figure>
          </div>
        </div>
      </div>
        <Inquirybtn name={"ProductInquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default GasketComponent;