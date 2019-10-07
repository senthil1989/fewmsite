import React from "react";
// import {connect} from 'react-redux';
// import {handleClick} from '../actions/header';
import "../styles/drawer.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleChange } from "../actions/header";
import SidebarHeader from "./sidebarheader";
import "../common/assets/css/styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTranslation } from "react-i18next";
// import headerReducer from '../reducers/header';

const useStyles = makeStyles(theme => ({
  list: {
    '&$selected': {
      backgroundColor:
        theme.palette.type === 'light'
          ? 'rgba(255, 255, 255, 1)' // grey[100]
          : 'rgba(255, 255, 255, 1)',
      '&$hover:hover': {
      backgroundColor:"white",
    },
    },
    

  },
  selected: { },
  hover:{},
  primary:{color:'#7d7d7d',}
}));

function SideBar(props) {
  const { handleChange, value } = props;
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  // const domRef = React.useRef(null);
  // const changeLanguage = lng => {
  //   i18n.changeLanguage(lng);
  // };

  const getItems = () => {
    var json = {
      About: [
        {
          id: "message",
          keyid: 0,
          path: "/message",
          sidebarName: `${t('MessagefromCEO')}`,
          sideContent: "",
          icon: "greet"
        },
        {
          id: "history",
          keyid: 1,
          path: "/history",
          sidebarName:  `${t('History')}`,
          sideContent: "",
          icon: "his"
        },
        {
          id: "location",
          keyid: 2,
          path: "/location",
          sidebarName:  `${t('Location')}`,
          sideContent: "",
          icon: "loc"
        }
      ],
      Product: [
        {
          id: "gases",
          keyid: 3,
          path: "/gases",
          sidebarName: "Gases",
          sideContent: `${t('Gases_icon_content')}`,
          icon: "vector_1",
          submenu: [
            {
              id: "Si₂H₆",
              keyid: 4,
              path: "/gases/Si₂H₆",
              sidebarName: "Si₂H₆"
            },
            {
              id: "GeH₄",
              keyid: 5,
              path: "/gases/GeH₄",
              sidebarName: "GeH₄"
            },
            {
              id: "C₃H₆",
              keyid: 6,
              path: "/gases/C₃H₆",
              sidebarName: "C₃H₆"
            },
            {
              id: "C₄F₆",
              keyid: 7,
              path: "/gases/C₄F₆",
              sidebarName: "C₄F₆"
            },
            {
              id: "C₃F₈",
              keyid: 8,
              path: "/gases/C₃F₈",
              sidebarName: "C₃F₈"
            }
          ]
        },
        {
          id: "chemical",
          keyid: 4,
          path: "/chemical/H₃PO₄",
          sidebarName: "Chemical",
          sideContent: `${t('Chemical_icon_content')}`,
          icon: "vector_2",
          submenu: [
            {
              id: "H₃PO₄",
              keyid: 9,
              path: "/chemical/H₃PO₄",
              sidebarName: "H₃PO₄"
            },
            {
              id: "HF",
              keyid: 10,
              path: "/chemical/HF",
              sidebarName: "HF"
            },
            {
              id: "Anti-rust coating",
              keyid: 11,
              path: "/chemical/Anti-rust-coating",
              sidebarName: "Anti-rust coating"
            },
          ]
        },
        {
          id: "gasket",
          keyid: 5,
          path: "/gasket/Flex/DX/EX+Localized-Gasket-Parts",
          sidebarName: "Gasket",
          sideContent: `${t('Gasket_icon_content')}`,
          icon: "vector_3",
          submenu: [
            {
              id: "Flex/DX/EX+ Localized Gasket Parts",
              keyid: 12,
              path: "/gasket/Flex/DX/EX+Localized-Gasket-Parts",
              sidebarName: "Flex/DX/EX+ Localized Gasket Parts"
            },
            
          ]
        },
        {
          id: "bead",
          keyid: 6,
          path: "/bead/RF-Series",
          sidebarName: "Bead",
          sideContent: `${t('Bead_icon_content')}`,
          icon: "vector_4",
          submenu: [
            {
              id: "RF Series",
              keyid: 13,
              path: "/bead/RF-Series",
              sidebarName: "RF Series"
            },
            {
              id: "FEsphere P Series",
              keyid: 14,
              path: "/bead/FEsphere-P-Series",
              sidebarName: "FEsphere P Series"
            },
            {
              id: "FEsphere SS, SD Series",
              keyid: 15,
              path: "/bead/FEsphere-SS",
              sidebarName: "FEsphere SS, SD Series"
            },
            {
              id: "Pigment Powder",
              keyid: 16,
              path: "/bead/Pigment-Powder",
              sidebarName: "Pigment Powder"
            },
            {
              id: "Coated Powders",
              keyid:17,
              path: "/bead/Coated-Powders",
              sidebarName: "Coated Powders"
            }
          ]
        },
        {
          id: "fdt",
          keyid: 7,
          path: "/fdt/NOVEC-1230-Manual-fire-extinguisher",
          sidebarName: "FDT",
          sideContent: `${t('FDT_icon_content')}`,
          icon: "vector_5",
          submenu: [
            {
              id: "NOVEC 1230 Manual fire extinguisher",
              keyid: 18,
              path: "/fdt/NOVEC-1230-Manual-fire-extinguisher",
              sidebarName: "NOVEC 1230 Manual fire extinguisher"
            },
            {
              id: "NOVEC 1230 Automatic fire extinguisher",
              keyid: 19,
              path: "/fdt/NOVEC-1230-Automatic-fire-extinguisher",
              sidebarName: "NOVEC 1230 Automatic fire extinguisher"
            },
          ]
        },
        {
          id: "shuttervalve",
          keyid: 8,
          path: "/shuttervalve/AVS-50",
          sidebarName: "ShutterValve",
          sideContent: `${t('Shutter_icon_content')}`,
          icon: "shutter",
          submenu: [
            {
              id: "AVS - 50",
              keyid: 20,
              path: "/shuttervalve/AVS-50",
              sidebarName: "AVS - 50"
            },
          ]
        }
      ],
      Employment: [
        {
          id: "employment",
          keyid: 9,
          path: "/employment",
          sidebarName: "Employment",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        },
        {
          id: "apply",
          keyid: 10,
          path: "/apply",
          sidebarName: "Apply",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        }
      ],
      Inquiry: [
        {
          id: "notice",
          keyid: 11,
          path: "/notice",
          sidebarName: "Notice",
          sideContent: "MessagefromCEO",
          icon: "notice"
        },
        {
          id: "catalogue",
          keyid: 12,
          path: "/catalogue",
          sidebarName: "Catalogue",
          sideContent: "MessagefromCEO",
          icon: "catalogue"
        },
        {
          id: "msds",
          keyid: 13,
          path: "/msds",
          sidebarName: "MSDS",
          sideContent: "MessagefromCEO",
          icon: "catalogue"
        },
        {
          id: "promotioncenter",
          keyid: 14,
          path: "/promotioncenter",
          sidebarName: "PromotionCenter",
          sideContent: "MessagefromCEO",
          icon: "prRoom"
        },
        {
          id: "inquiry",
          keyid: 15,
          path: "/inquiry",
          sidebarName: "Inquiry",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        }
      ]
    };

    return json;
  };

  const list = getItems();

  function renderSubitems(props) {
    const { match } = props.content;
    if (match.url === "/gases/Si₂H₆" || match.url === '/gases/GeH₄' || match.url === '/gases/C₃H₆' || match.url ===  '/gases/C₄F₆' || match.url === '/gases/C₃F₈') {

      return (
        <>
          {list.Product[0].submenu.map((submenus, index) => {
            return (
              <>
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(index, submenus)}
                  />
                </ListItem>
              </Link>
              </>
            );
          })}
        </>
      );
    } else if (match.url === "/chemical/H₃PO₄"  ||  match.url === '/chemical/HF' || match.url === '/chemical/Anti-rust-coating'  ) {
      return (
        <>
          {list.Product[1].submenu.map((submenus, index) => {
            return (
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(index, submenus)}
                  />
                </ListItem>
              </Link>
            );
          })}
        </>
      );
    } else if ( match.url === "/gasket/Flex/DX/EX+Localized-Gasket-Parts" ) {
      return (
        <>
          {list.Product[2].submenu.map((submenus, index) => {
            return (
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(index, submenus)}
                  />
                </ListItem>
              </Link>
            );
          })}
        </>
      );
    } else if (match.url === "/bead/RF-Series" || match.url === "/bead/FEsphere-P-Series" || match.url === "/bead/FEsphere-SS" || match.url === "/bead/Pigment-Powder" || match.url === "/bead/Coated-Powders" ) {
      return (
        <>
          {list.Product[3].submenu.map((submenus, index) => {
            return (
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(index, submenus)}
                  />
                </ListItem>
              </Link>
            );
          })}
        </>
      );
    } else if ( match.url === "/fdt/NOVEC-1230-Manual-fire-extinguisher" || match.url === "/fdt/NOVEC-1230-Automatic-fire-extinguisher" ) {
      return (
        <>
          {list.Product[4].submenu.map((submenus, index) => {
            return (
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index} >
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(submenus.id, submenus,index)}
                  />
                </ListItem>
              </Link>
            );
          })}
        </>
      );
    } else if (match.url === "/shuttervalve/AVS-50") {
      return (
        <>
          {list.Product[5].submenu.map((submenus, index) => {
            return (
              <Link to={submenus.path}>
                <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                  <ListItemText
                    key={submenus.sidebarName}
                    primary={submenus.sidebarName}
                    onClick={() => handleChange(index, submenus)}
                  />
                </ListItem>
              </Link>
            );
          })}
        </>
      );
    }
  }
  const sideList = props => {
    const { match } = props.content;
    if (
      match.url === "/message" ||
      match.url === "/history" ||
      match.url === "/location"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
            <SidebarHeader match={match} list={list.About} value={value} />
            <List>
              {list.About.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index} classes={{root:classes.list, selected: classes.selected, hover: classes.hover}}>
                      <ListItemText 
                        className={{root:classes.primary}}
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={() => handleChange(index, submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    } else if (
      match.url === "/gases/Si₂H₆"  ||  match.url === '/gases/GeH₄' || match.url === '/gases/C₃H₆'  || match.url === '/gases/C₄F₆' ||  match.url === '/gases/C₃F₈'  ||
      match.url === "/chemical/H₃PO₄"  ||  match.url === '/chemical/HF' || match.url === '/chemical/Anti-rust-coating'  ||
      match.url === "/gasket/Flex/DX/EX+Localized-Gasket-Parts" ||
      match.url === "/bead/RF-Series" || match.url === "/bead/FEsphere-P-Series" || match.url === "/bead/FEsphere-SS" || match.url === "/bead/Pigment-Powder" || match.url === "/bead/Coated-Powders" ||
      match.url === "/fdt/NOVEC-1230-Manual-fire-extinguisher" || match.url === "/fdt/NOVEC-1230-Automatic-fire-extinguisher" ||
      match.url === "/shuttervalve/AVS-50"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
            <SidebarHeader match={match} list={list.Product} value={value} />
            <List>{renderSubitems(props)}</List>
          </div>
        </div>
      );
    } else if (match.url === "/employment" || match.url === "/apply") {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
            <SidebarHeader match={match} list={list.Employment} value={value} />
            <List>
              {list.Employment.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={() => handleChange(index, submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    } else if (
      match.url === "/notice" ||
      match.url === "/catalogue" ||
      match.url === "/location" ||
      match.url === "/msds" ||
      match.url === "/promotioncenter" ||
      match.url === "/inquiry"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
            <SidebarHeader match={match} list={list.Inquiry} value={value} />
            <List>
              {list.Inquiry.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} selected={value.value === index}>
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={() => handleChange(index, submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div>{sideList(props)}</div>
    </>
  );
}
function mapStateToProps(state) {
  const { headerReducer } = state;
  console.log(headerReducer);
  return { value: headerReducer };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    handleChange: (id, submenus) => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(handleChange(id, submenus));
      }, 10);
    }
  };
};
// function mapStateToProps(state) {
//   console.log(state)
//   return {exOpen:state.headerReducer};
// }

// const mapDispatchToProps = dispatch => ({
//     // dispatching plain actions
//     handleClick: text => dispatch(handleClick(text))
// })
// export default  connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
