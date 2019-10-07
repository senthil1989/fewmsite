import React from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "Product descriptions" },
  para: {
    para: `The auto valve shutter remotely controls the function to open and close a valve of the gas cylinder with pontential dangers of negligent accidents while workers' access to it is completely blocked.
    
    The auto valve shutter prevents secondary accidents by closing a valve of the gas cylinder automatically in case of emergency that the electricity is cut off or gas leaks.`
  }
};
const subcontent2 = {
  title: { header: "Specification" },
  para: { para: "" }
};
function ShutterComponent() {
  return (
    <>
      <CommonTitle title={"Phosphoric Acid (H₃PO₄)"} />
      <div className="chemicalsub">
        <span>{Imgfunction("cheSub1")}</span>
        <div>
          <GastextComponent subcontent={subcontent1} />
        </div>
      </div>
      <GastextComponent subcontent={subcontent2} />
      <div class="single-table">
        <table class="table">
          <tbody>
            <tr>
              <td>Driver Troque</td>

              <td>OPEN : 27Nm(0º ~ 510º) / CLOSE : 10Nm</td>
            </tr>

            <tr>
              <td>Driver angle</td>

              <td>0º ~ 510º</td>
            </tr>

            <tr>
              <td>Driving air pressure</td>

              <td>3kgf / ㎠ ~ 10kgf / ㎠</td>
            </tr>

            <tr>
              <td>Standard input air pressure</td>

              <td>6.5 kgf / ㎠</td>
            </tr>

            <tr>
              <td>Body standard</td>

              <td>183(W) x 183(L) x 283(H), Weight : 5kg</td>
            </tr>

            <tr>
              <td>Emergency Shut Off</td>

              <td>Application</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
    </>
  );
}

export default ShutterComponent;
