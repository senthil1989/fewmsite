import React from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "HELIOS" },
  para: {
    para: `Soft texture using natural mica base
    Excellent color expression
    Creating natural glow
    Good price competitiveness
    10 ~ 60㎛ / 20 ~ 100㎛`
  }
};
const subcontent2 = {
  title: { header: "CYGNUS" },
  para: {
    para: `Soft texture using synthetic mica base
    Excellent color expression
    Clear & Brightness pigment
    Good price competitiveness
    10 ~ 60㎛`
  }
};
const subcontent3 = {
  title: { header: "TIARA" },
  para: {
    para: `High gloss achieved by using Borosilicate Glass base
    Various colors and exellent color expression
    Good price competitiveness
    20 ~ 100㎛ / 50 ~ 250㎛`
  }
};
const subcontent4 = {
  title: { header: "TITAN" },
  para: {
    para: `Deep black color using a natural mica base
    Excellent expression of black color
    Various black colors
    Various formulations are applicable with non-bleeding effects
    10 ~ 60㎛`
  }
};
const subcontent5 = {
  title: { header: "TITAN - TR" },
  para: {
    para: `Produces a deep, black glow and high gloss
      Excellent expression of black color
      Various black colors
      Various formulations are applicable with non-bleeding effects
      20 ~ 100 ㎛/ 50 ~ 250㎛`
  }
};
const subcontent6 = {
  title: { header: "LUCID Cover pearl" },
  para: {
    para: `Haze Value & Total transmittance : 60 ~ 80
      Less gloss than Pearl Pigment
      Soft focus effects
      Multilayers of Mica / TiO₂ / SiO₂`
  }
};
const subcontent7 = {
  title: { header: "P.C.C. (Platy Colorant Complex)" },
  para: {
    para: ""
  }
};
const subcontent8 = {
  title: { header: "B.C.C. (Bead type Colorant Complex)" },
  para: {
    para: ""
  }
};

const divStyle2 = {
  position: "relative",
  margin: "0 auto",
  top: "0px",
  left: "0px",
  visibility: "hidden"
};
const imgStyle2 = {
  cursor: "default",
  position: "relative",
  top: "0px",
  left: "0px",
  overflow: "hidden"
};
const circledivStyle2 = {
  position: "absolute",
  bottom: "-15px",
  right: "12px"
};
const sizeStyle2 = {
  width: "10px",
  height: "10px"
};
const circleStyle2 = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%"
};

// const oncebead = () => {
//   window.jssor_1_slider_init();
// };
function BeadComponentfour() {
  //   useEffect(() => {
  //     window.addEventListener("click", window.jssor_1_slider_init());
  //   }, []);
  return (
    <>
      <CommonTitle title={"Pigment Powder"} />
      <div className="chemicalsub">
        <span>{Imgfunction("pigment1")}</span>
        <div>
          <GastextComponent subcontent={subcontent1} />
        </div>
      </div>
      <div className="chemicalsub">
        <div>
          <GastextComponent subcontent={subcontent2} />
        </div>
        <span>{Imgfunction("pigment2")}</span>
      </div>
      <div className="chemicalsub">
        <span>{Imgfunction("pigment3")}</span>
        <div>
          <GastextComponent subcontent={subcontent3} />
        </div>
      </div>
      <div className="chemicalsub">
        <div>
          <GastextComponent subcontent={subcontent4} />
          <GastextComponent subcontent={subcontent5} />
        </div>
        <div>
          <div id="jssor_1" style={divStyle2} class="sliWid">
            <div data-u="slides" style={imgStyle2} class="sliWid">
              <div>{Imgfunction("pigment4")}</div>
              <div>{Imgfunction("pigment5")}</div>
            </div>
            <div
              data-u="navigator"
              class="jssorb051"
              data-autocenter="1"
              data-scale="0.5"
              data-scale-bottom="0.75"
              style={circledivStyle2}
            >
              <div data-u="prototype" class="i" style={sizeStyle2}>
                <svg viewBox="0 0 16000 16000" style={circleStyle2}>
                  <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chemicalsub">
        <span>{Imgfunction("pigment6")}</span>
        <div>
          <GastextComponent subcontent={subcontent6} />
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">{Imgfunction("pigment7")}</figure>
          </div>
        </div>
      </div>
      <GastextComponent subcontent={subcontent7} />
      <div class="vectable pane-vScroll">
        <table class="table table-striped mBtm100">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Composition(%)</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platy Pigments</td>
              <td>50 ~ 85</td>
              <td>Based Platy Pigment</td>
            </tr>
            <tr>
              <td>(TiO₂)</td>
              <td>(10 ~ 30)</td>
              <td>(for brightness &amp; covering effects)</td>
            </tr>
            <tr>
              <td>Colorant</td>
              <td>15 ~ 50</td>
              <td>for coloring effects with High chroma</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">{Imgfunction("pigment8")}</figure>
          </div>
        </div>
      </div>
      <GastextComponent subcontent={subcontent8} />
      <div class="vectable pane-vScroll">
        <table class="table table-striped mBtm50">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Composition(%)</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Silica</td>
              <td>50 ~ 85</td>
              <td>Based on Spherical silica Bead</td>
            </tr>
            <tr>
              <td>Colorant</td>
              <td>15 ~ 50</td>
              <td>for coloring effects with High chroma</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
      <Inquirybtn name={"XentechSite"} img={Imgfunction("b_arrow")} />
      
    </>
  );
}

export default BeadComponentfour;
