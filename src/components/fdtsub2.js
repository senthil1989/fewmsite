import React, { useEffect, Component } from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";
import Inquirybtn from "./inquirybtn";
import Imgfunction from "../common/images";

const subcontent1 = {
  title: { header: "Overview of the proposal" },
  para: {
    para: `Automatic fire fighting equipment is installed in small spaces to prevent fire spreading by extinguishing fires in cubicles in station transformers.`
  }
};
const subcontent2 = {
  title: { header: "Background of the proposal" },
  para: {
    para: `Fires need to be put out in their early stages to prevent spread of secondary damage due to fires in cubicles to operate switches, circuit breakers, gauges, etc. safely for controling distribution systems, distributing electric power, making and breaking circuits, staying safe, and reading electric meters. The necessity of fire fighting equipment with latest fire extinguishing agents which never damage electronic facilities in operation when extinguishing fires has come to the fore.`
  }
};
const subcontent3 = {
  title: { header: "Tray Cable" },
  para: {
    para: ""
  }
};
const subcontent4 = {
  title: { header: "Fire safety standards" },
  para: {
    para: ""
  }
};
const subcontent5 = {
  title: { header: "NOVEC 1230 & Features of gas fire extinguishing agents" },
  para: {
    para: ""
  }
};
const subcontent6 = {
  title: { header: "NOVEC 1230 Insulation" },
  para: {
    para: ""
  }
};
const subcontent7 = {
  title: { header: "Environment regulation" },
  para: {
    para: "Environmental Properties of Halon 1310 and Alternatives"
  }
};

const divStyle = {
  position: "relative",
  margin: "0 auto",
  top: "0px",
  left: "0px",
  visibility: "hidden"
};
const imgStyle = {
  cursor: "default",
  position: "relative",
  top: "0px",
  left: "0px",
  overflow: "hidden"
};
const circledivStyle = {
  position: "absolute",
  bottom: "-15px",
  right: "12px"
};
const sizeStyle = {
  width: "10px",
  height: "10px"
};
const circleStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%"
};

const divStyle1 = {
  position: "relative",
  margin: "0 auto",
  top: "0px",
  left: "0px",
  visibility: "hidden"
};
const imgStyle1 = {
  cursor: "default",
  position: "relative",
  top: "0px",
  left: "0px",
  overflow: "hidden"
};
const circledivStyle1 = {
  position: "absolute",
  bottom: "-15px",
  right: "12px"
};
const sizeStyle1 = {
  width: "10px",
  height: "10px"
};
const circleStyle1 = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%"
};


function FdtComponenttwo() {
  return (
    <>
      <CommonTitle title={"Cubicle Automatic fire extinguisher"} />
      <div className="chemicalsub">
        <div>
          <div id="jssor_1" style={divStyle} class="sliWidFdt2">
            <div data-u="slides" style={imgStyle} class="sliWidFdt2">
              <div>{Imgfunction("fdt_02novec_s1")}</div>
              <div>{Imgfunction("fdt_02novec_s2")}</div>
              <div>{Imgfunction("fdt_02novec_s3")}</div>
            </div>
            <div
              data-u="navigator"
              class="jssorb051"
              data-autocenter="1"
              data-scale="0.5"
              data-scale-bottom="0.75"
              style={circledivStyle}
            >
              <div data-u="prototype" class="i" style={sizeStyle}>
                <svg viewBox="0 0 16000 16000" style={circleStyle}>
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
            <figure class="figure">{Imgfunction("fdt_02novec_1")}</figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">{Imgfunction("fdt_02novec_2")}</figure>
          </div>
        </div>
      </div>
      <GastextComponent subcontent={subcontent4} />
      <div class="vectable pane-vScroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Surface fire</th>
              <th>Fire in deep parts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fires break out on the surface of combustibles.</td>
              <td>Fires break out in combustibles</td>
            </tr>
            <tr>
              <td>Fires break out on surface of the like oil.</td>
              <td>
                Fire from combustible combustible materials such as wood or
                fibers
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <ul>
          <li>
            The first fire breaks out on the surface. And as heat is transferred
            to deep parts, the second fire breaks out in them.
          </li>
          <li>
            When people smoke, fires break out as inner parts burn with the
            surface.
          </li>
          <li>Fire with heat like lumber, textile, and electrical cable.</li>
        </ul>
      </div>
      <GastextComponent subcontent={subcontent5} />
      <div class="vectable pane-vScroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>NOVEC - 1230</th>
              <th>Gas system</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>There is few evaporation heat</td>
              <td>Evaporation heat is high</td>
            </tr>
            <tr>
              <td>
                The agents can easily be applied to open areas with enclosed
                fire zones
              </td>
              <td>The gas system can just be applied to enclosed fire zones</td>
            </tr>
            <tr>
              <td>
                Additional agents are not required because
                <br /> there is no need of calculating openings
              </td>
              <td>Fires cannot be extinguished in case of a lot of openings</td>
            </tr>
            <tr>
              <td>Time to release fire extinguishing agents is 90 seconds</td>
              <td>
                Dangers of reignition are exposed because time to
                <br />
                release fire extinguishing agents is 15 seconds
              </td>
            </tr>
            <tr>
              <td>
                hey are suitable for fires of deep parts because they extinguish
                fires like water.
              </td>
              <td>The gas system is unsuitable for fires of deep parts.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <GastextComponent subcontent={subcontent6} />
      <div className="chemicalsub">
        <div className="divslider">
          <div id="jssor_2" style={divStyle1} class="sliWidFdt3">
            <div data-u="slides" style={imgStyle1} class="sliWidFdt3">
              <div>{Imgfunction("fdt_02novec_3")}</div>
              <div>{Imgfunction("fdt_02novec_4")}</div>
              <div>{Imgfunction("fdt_02novec_5")}</div>
              <div>{Imgfunction("fdt_02novec_6")}</div>
            </div>
            <div
              data-u="navigator"
              class="jssorb051"
              data-autocenter="1"
              data-scale="0.5"
              data-scale-bottom="0.75"
              style={circledivStyle1}
            >
              <div data-u="prototype" class="i" style={sizeStyle1}>
                <svg viewBox="0 0 16000 16000" style={circleStyle1}>
                  <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            Novec1230 has the electrically excellent dielectric behaviour in
            both of liquids and gas so that it is never damaged even though it
            is sprayed on electric equipment or electronic facilities. Gaseous
            voltage breakdown 16kV, - 1atm, 21℃, 2.7mm The electrode gap
            conditions - 2.3 times higher than those of N2 gas. - Drippy voltage
            breakdown 48kV
          </p>
        </div>
      </div>
      <div class="vectable pane-vScroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th colspan="3">Dielectric Strength¹(kV)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Novec 1230 Vapour</td>
              <td>16</td>
              <td>2.3 times that of dry nitrogen</td>
            </tr>
            <tr>
              <td>Gaseous mixture 5 vol% Novec 1230 in air</td>
              <td>9.2</td>
              <td>1.4 times that of air</td>
            </tr>
            <tr>
              <td>Novec 1230 liquid</td>
              <td>48 </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>¹According to a method consistent with ASTM D877</div>
      <GastextComponent subcontent={subcontent7} />
      <div class="novec2table">
        <table class="table">
          <tbody>
            <tr>
              <td>Properties</td>
              <td>Halon 1301</td>
              <td>Novec 1230</td>
              <td>HFC - 125</td>
              <td>HFC - 227ea</td>
              <td>HFC - 23</td>
            </tr>
            <tr>
              <td>Ozone Depletion Potential(ODP)</td>
              <td>12.0</td>
              <td>0.0</td>
              <td>0.0</td>
              <td>0.0</td>
              <td>0.0</td>
            </tr>
            <tr>
              <td>
                Global Warning Portential - IPPC2001<sup>¹</sup>
              </td>
              <td>6,900</td>
              <td>1</td>
              <td>3,400</td>
              <td>3,500</td>
              <td>12,500</td>
            </tr>
            <tr>
              <td>Atmospheric Lifetime(Years)</td>
              <td>65.0</td>
              <td>0.014</td>
              <td>29.0</td>
              <td>33.0</td>
              <td>260</td>
            </tr>
            <tr>
              <td>SNAP(Yes / No)</td>
              <td>N/A</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>¹IPPC Intergovernmental Panel on Climate Change.</div>
      <Inquirybtn name={"ProductInquiry"} img={Imgfunction("b_arrow")} />
    </>
  );
}

export default FdtComponenttwo;
