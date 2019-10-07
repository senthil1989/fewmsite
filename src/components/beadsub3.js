import React, { useEffect } from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "Description" },
  para: {
    para: `Chemical Name : Polymethylsilsesquioxane (PMSQ)
    CAS No. : 68554-70-1
    Form : Spherical Powder`
  }
};
const subcontent2 = {
  title: { header: "Effect" },
  para: {
    para: `High optical performance
    Ball bearing effect
    Soft focus effect`
  }
};
const subcontent3 = {
  title: { header: "Selection Guide" },
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
function BeadComponentthree() {
  //   useEffect(() => {
  //     window.addEventListener("click", window.jssor_1_slider_init());
  //   }, []);
  return (
    <>
      <CommonTitle title={"Silicone Resin Powder - SS, SD"} />
      <div className="chemicalsub">
        <div>
          <div id="jssor_1" style={divStyle2} class="sliWid">
            <div data-u="slides" style={imgStyle2} class="sliWid">
              <div>{Imgfunction("bead_ss_s1")}</div>
              <div>{Imgfunction("bead_ss_s2")}</div>
              <div>{Imgfunction("bead_ss_s3")}</div>
              <div>{Imgfunction("bead_ss_s4")}</div>
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

        <div>
          <GastextComponent subcontent={subcontent1} />
          <GastextComponent subcontent={subcontent2} />
        </div>
      </div>

      <GastextComponent subcontent={subcontent3} />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">{Imgfunction("bead_ss_2")}</figure>
          </div>
        </div>
      </div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
    </>
  );
}

export default BeadComponentthree;
