import React from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "Powders" },
  para: {
    para: `Mica, Talc, Sericite, Titanium Dioxide, Iron Oxides, Zinc Oxide, PMMA bead, Ultramarine color pigments, PSQ bead poweder and Spherical Silica bead(6㎛, 10㎛ )`
  }
};
const subcontent2 = {
  title: { header: "Coating agent" },
  para: {
    para: `Silicone(Dimethicone, Methicone, Silane etc.) Metal soaps(Magnesium Myrristate, aluminum Stearate etc), Amino acids(Lauroyl Lysine, Sodium Lauroyl Glutamate, Disodium Stearoyl Glutamate etc), Fluorine compounds, Wax Compounds(Bees wax, Polyethylene etc), Inorganic compounds(Nano-sized TiO₂, SiO₂ etc)
    `
  }
};


function BeadComponentfive() {

  return (
    <>
      <CommonTitle title={"Pigment Powder"} />
      <div className="chemicalsub">
        <span>{Imgfunction("coat1")}</span>
        <div>
          <GastextComponent subcontent={subcontent1} />
        </div>
      </div>
      <div className="chemicalsub">
        <div>
          <GastextComponent subcontent={subcontent2} />
        </div>
        <span>{Imgfunction("coat2")}</span>
      </div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
      <Inquirybtn name={"XentechSite"} img={Imgfunction("b_arrow")} />
      
    </>
  );
}

export default BeadComponentfive;
