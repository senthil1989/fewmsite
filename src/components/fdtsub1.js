import React from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "About" },
  para: {
    para: `Linde Korea obtained approval on model of the manual fire extinguisher which can be applied to Class A fires (General fires) by using 3M's NOVEC1230™ clean agent for the first time in Korea after continuous studies and tests from Korea Fire Equipment Inspection Corporation (KFI). Linde Fire Extinguisher, the manual fire extinguisher which got recognition of fire extinguishing performance of Class A(General fires), B(Oil fires), and C(Electrical fires), is the high-performance premium product to be able to respond to various fires promptly and minimize corporate assets and human damage due to the characteristics of NOVEC1230™. Linde Korea tries to play a role of protecting customers' precious life and assets and creating safe environment with reliable products like this.`
  }
};
const subcontent2 = {
  title: { header: "Solution" },
  para: {
    para: `NOVEC1230™ used in Linde Fire Extinguisher has the electrically excellent dielectric behaviour in both of liquids and gas so that it is never damaged even though it is sprayed on electric equipment or electronic facilities.`
  }
};
const subcontent3 = {
  title: { header: "Use" },
  para: {
    para: `It is very multipurpose. Linde Fire Extinguisher can be applied to facilities with high equipment including computers, machines, information and communication facilities, electrical and electronics equipment rooms, clean rooms, etc. and all other places that fires of Class A, B, and C break out. It does not damage equipment and facilities even thought it is sprayed and there is no need of secondary work of cleaning foreign substances of fire extinguishing agents because they do not remain after being done.`
  }
};
const subcontent4 = {
    title: { header: "Structure" },
    para: {
      para: ''
    }
  };
  const subcontent5 = {
    title: { header: "Product details" },
    para: {
      para: ''
    }
  };
  const subcontent6= {
    title: { header: "Comparative table of gas systems when extinguishing fire" },
    para: {
      para: ''
    }
  };
function FdtComponentone() {
  return (
    <>
      <CommonTitle title={"Linde Fire Extinguisher Manual fire extinguisher"} />
      <div className="chemicalsub">
        <span>{Imgfunction("fdt_novec1")}</span>
        <div>
          <GastextComponent subcontent={subcontent1} />
          <GastextComponent subcontent={subcontent2} />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction('fdt_novec2')}
              <figcaption class="figure-caption">8It is helpful for stabilizing electricfields by reducing their strength.</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('fdt_novec3')}
              <figcaption class="figure-caption">The fire extinguishing agent is very less soluble in water.</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('fdt_novec4')}
              <figcaption class="figure-caption">Blocking high current is more excellent than other gas currently used because of higher insulation performance</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('fdt_novec5')}
              <figcaption class="figure-caption">Toxic substances due to chemical reaction are not emitted.</figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
            {Imgfunction('fdt_novec6')}
              <figcaption class="figure-caption">It's the non-conductive material which is not electrifying.</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <GastextComponent subcontent={subcontent3} />
      <GastextComponent subcontent={subcontent4} />
      <div>{Imgfunction('fdt_novec7')}</div>
      <GastextComponent subcontent={subcontent5} />
      <div class="single-table">
                                      <table class="table">
                                        <tbody>
                                          <tr>
                                            <td>Type</td>
                                            <td>FK - 5 - 1 - 12 / 4.5kg(N₂ Accumulator type)</td>
                                          </tr>
                                          <tr>
                                            <td>fire extinguishing ability</td>
                                            <td>Class A, Class B 1 unit / Class C</td>
                                          </tr>
                                          <tr>
                                            <td>radiation time(20℃)</td>
                                            <td>12 seconds</td>
                                          </tr>
                                          <tr>
                                            <td>radiation distance(20℃)</td>
                                            <td>3 - 4 M</td>
                                          </tr>
                                          <tr>
                                            <td>workable temperature</td>
                                            <td>-20℃ ~ 40℃</td>
                                          </tr>
                                          <tr>
                                            <td>quality of material of the container</td>
                                            <td>STS 304</td>
                                          </tr>
                                          <tr>
                                            <td>quality of material of the valve</td>
                                            <td>Brass</td>
                                          </tr>
                                          <tr>
                                            <td>inner volume</td>
                                            <td>4.5L</td>
                                          </tr>
                                          <tr>
                                            <td>total weight</td>
                                            <td>9.5 Kg</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
      <GastextComponent subcontent={subcontent6} />
      <div class="single-table">
                                      <table class="table">
                                        <tbody>
                                          <tr>
                                            <td></td>
                                            <td>NOVEC1230™</td>
                                            <td>HCFC-123*</td>
                                            <td>HFC-236fa</td>
                                          </tr>
                                          <tr>
                                            <td>Boiling point</td>
                                            <td>49.2℃</td>
                                            <td>27.6℃</td>
                                            <td>-1.4℃</td>
                                          </tr>
                                          <tr>
                                            <td>freezing point</td>
                                            <td>-108℃</td>
                                            <td>-107℃</td>
                                            <td>-103℃</td>
                                          </tr>
                                          <tr>
                                            <td>filling pressure</td>
                                            <td>2.4 MPa</td>
                                            <td>0.9 MPa</td>
                                            <td>0.9 MPa</td>
                                          </tr>
                                          <tr>
                                            <td>fire extinguishing ability unit</td>
                                            <td>4.5Kg A1. B1, C</td>
                                            <td>2.5Kg A1. B1, C<br/>3Kg A1. B2, C</td>
                                            <td>2.5Kg A1. B1, C<br/>3.5Kg A1. B2, C</td>
                                          </tr>
                                          <tr>
                                            <td>Ozone layer depletion potential</td>
                                            <td>0</td>
                                            <td>0.012</td>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <td>global warming potential</td>
                                            <td>1</td>
                                            <td>76</td>
                                            <td>6.3</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
        <div><p>* The use of HCFC - 123  is stopped because it contains toxic substances in other countries. Now, it is just used as the fire extinguishing agent in Korea.
                                      **CO² fire extinguishers are unsuitable for being applied to fires of Class A.</p></div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
    </>
  );
}

export default FdtComponentone;
