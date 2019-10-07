import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';
import Inquirybtn from './inquirybtn';
import Imgfunction from "../common/images";

const subcontent1={
    title:{header:'Description'},
    para:{para:"CAS No. 7664-38-2"} 
}
const subcontent2={
    title:{header:'Application'},
    para:{para:`Semiconductor Fabrication (Etching Process)
    Form : Liquid / Acid
    Effect : Etching Nitride off the SiO2 Water
    Usage : Wet Etching Process in Semiconductor`} 
}
function ChemicalComponentone(){
return(
    <>
        <CommonTitle title={"Phosphoric Acid (H₃PO₄)"} />
        <div className="chemicalsub">
        <span>{Imgfunction('cheSub1')}</span>
        <div>
        <GastextComponent subcontent={subcontent1} /> 
        <GastextComponent subcontent={subcontent2} /> 
        </div>
        </div>
        <Inquirybtn name={"ProductInquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default ChemicalComponentone;