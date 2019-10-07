import React from 'react';
import { useTranslation } from "react-i18next";

function Inquirybtn({name,img}){
    const {t} = useTranslation();
    if(name ==="XentechSite"){
        return (
            <button  className="inquirybtn"><a href='https://www.xentech.kr' target="_blank">{`${t(name)}`}{img}</a></button>
        )
    }
    else {
    return (
        <button className="inquirybtn">{`${t(name)}`}{img}</button>
    )
    }
}
export default Inquirybtn;