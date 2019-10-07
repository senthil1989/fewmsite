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
    para:{para:`Semiconductor Fabrication (Cleaning Process)
    Form : Liquid / Acid
    Effect : Cleaning Process in Semiconductor Processing
    Usage : Cleaning process in Semiconductor processing`} 
}


function ChemicalComponenttwo(){
return(
    <>
        <CommonTitle title={"Hydrofluoric Acid (HF))"} />
        <div className="chemicalsub">
        <span>{Imgfunction('cheSub2')}</span>
        <div>
        <GastextComponent subcontent={subcontent1} /> 
        <GastextComponent subcontent={subcontent2} /> 
        </div></div>
        <Inquirybtn name={"ProductInquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default ChemicalComponenttwo;