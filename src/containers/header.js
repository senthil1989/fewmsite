import React from 'react';
// import {connect} from 'react-redux';
// import {handleClick} from '../actions/header';
import {connect} from 'react-redux';
import '../styles/drawer.scss';
import { Link } from 'react-router-dom';
import '../common/assets/css/styles.scss';
import {handleChange} from '../actions/header';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Imgfunction from '../common/images';
import { useTranslation } from 'react-i18next';

// import headerReducer from '../reducers/header';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
});



function TemporaryDrawer({handleChange}) {
  const {t, i18n} =useTranslation();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [draw, setdraw] = React.useState('close');
  const [expanded, setOpen] = React.useState({});
  const domRef = React.useRef(null);

  function handleClick(id) { 
    setOpen({expanded: expanded, [id]:true});
  }
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const toggleDrawer = (side, open,id) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdraw(open ? 'open':'close');
    setState({ ...state, [side]: open });
    setOpen(false)
  };

  const getItems=()=> {
    var json = {
      items: [
        {
          id: 1,
          name: `${t("AbouttheCompany")}`,
          submenu: [
            {
              id: "message",
              sname: `${t("MessagefromCEO")}`,
              url: "/message",
              sidebarName: "MessagefromCEO",
              sideContent: "MessagefromCEO",
              icon: "greet"
            },
            {
              id: "history",
              sname: `${t("History")}`,
              url: "/history",
              sidebarName: "History",
              sideContent: "History",
              icon: "his"
            },
            {
              id: "location",
              sname: `${t("Location")}`,
              url: "/location",
              sidebarName: "Location",
              sideContent: "Location",
              icon: "loc"
            }
          ]
        },
        {
          id: 2,
          name: `${t("Product")}`,
          submenu: [
            {
              id: "gases",
              sname: `${t("Gases")}`,
              url: "/gases/Si₂H₆",
              sidebarName: "Gases",
              sideContent: "MessagefromCEO",
              icon: "vector_1"
            },
            {
              id: "chemical",
              sname: `${t("Chemical")}`,
              url: "/chemical/H₃PO₄",
              sidebarName: "Chemical",
              sideContent: "MessagefromCEO",
              icon: "vector_2"
            },
            {
              id: "gasket",
              sname: `${t("Gasket")}`,
              url: "/gasket/Flex/DX/EX+Localized-Gasket-Parts",
              sidebarName: "Gasket",
              sideContent: "MessagefromCEO",
              icon: "vector_3"
            },
            {
              id: "bead",
              sname: `${t("BEAD")}`,
              url: "/bead/RF-Series",
              sidebarName: "Bead",
              sideContent: "MessagefromCEO",
              icon: "vector_4"
            },
            {
              id: "fdt",
              sname: `${t("FDT")}`,
              url: "/fdt/NOVEC-1230-Manual-fire-extinguisher",
              sidebarName: "FDT",
              sideContent: "MessagefromCEO",
              icon: "vector_5"
            },
            {
              id: "shuttervalve",
              sname: `${t("ShutterValve")}`,
              url: "/shuttervalve/AVS-50",
              sidebarName: "ShutterValve",
              sideContent: "MessagefromCEO",
              icon: "shutter"
            }
          ]
        },
        {
          id: 3,
          name: `${t("Employment")}`,
          submenu: [
            {
              id: "employment",
              sname: `${t("Employment")}`,
              url: "/employment",
              sidebarName: "Employment",
              sideContent: "MessagefromCEO",
              icon: "recruitIcon"
            },
            {
              id: "apply",
              sname: `${t("Apply")}`,
              url: "/apply",
              sidebarName: "Apply",
              sideContent: "MessagefromCEO",
              icon: "recruitIcon"
            }
          ]
        },
        {
          id: 4,
          name: `${t("CustomerSupport")}`,
          submenu: [
            {
              id: "notice",
              sname: `${t("Notice")}`,
              url: "/notice",
              sidebarName: "Notice",
              sideContent: "MessagefromCEO",
              icon: "notice"
            },
            {
              id: "catalogue",
              sname: `${t("Catalogue")}`,
              url: "/catalogue",
              sidebarName: "Catalogue",
              sideContent: "MessagefromCEO",
              icon: "catalogue"
            },
            {
              id: "msds",
              sname: `${t("MSDS")}`,
              url: "/msds",
              sidebarName: "MSDS",
              sideContent: "MessagefromCEO",
              icon: "catalogue"
            },
            {
              id: "promotioncenter",
              sname: `${t("PromotionCenter")}`,
              url: "/promotioncenter",
              sidebarName: "PromotionCenter",
              sideContent: "MessagefromCEO",
              icon: "prRoom"
            },
            {
              id: "inquiry",
              sname: `${t("Inquiry")}`,
              url: "/inquiry",
              sidebarName: "Inquiry",
              sideContent: "MessagefromCEO",
              icon: "recruitIcon"
            }
          ]
        }
      ]
    };
  
  
  return json;
  }
  const list = getItems();
  const sideList = side => (  
    <div className="header-main">
    <div className="h-flag">
        <span id="en"onClick={() => changeLanguage('en')}>{Imgfunction('flag2')}</span>
        <span id="jap"onClick={() => changeLanguage('jap')}>{Imgfunction('flag1')}</span>
      </div>
     
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
       <div className="h-logo">{Imgfunction('logo')}</div>  
      <List>
        {list.items.map((text,index) => (
         <React.Fragment key={text.name}> 
          <ListItem button  key={text.id} ref={domRef} onClick={()=>handleClick(index)}>
          <ListItemText className="drawerText" primary={text.name} /> 
        </ListItem>
        <Divider />
        <Collapse in={expanded[index]}  key={text.id+text.name}  timeout="auto" unmountOnExit>
          <List component="div" disablePadding key={text.id+index.toString()}>
            {text.submenu.map((submenus, index)=>{ return(<Link to={submenus.url}><ListItem button  key={submenus.id+"sub"} className={classes.nested} >
            <ListItemText className="drawerTextsub" key={submenus.id} primary={submenus.sname} onClick={()=>handleChange(submenus.id, submenus)} />
            </ListItem></Link>)})}
          </List>
        </Collapse>
        </React.Fragment>
        ))}
      </List>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
    </div>
  );

  return (
    <>
      <div id="nav-icon0" className={`${draw} `} onClick={toggleDrawer('right', !state.right)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
        <div class="mMar">
                    <div class="terms_area">
                        <div class="sns">
                            <a href="privatepolicy.php">Privacy policy</a><span>|</span>
                            <a href="greet.php">About the company</a><span>|</span>
                            <a href="legal.php">Legal Notices</a>
                        </div>
                        <p>Head office : TEL 031-221-6782 FAX 031-221-6783 </p>
                        <p>Jeunggpyeong : TEL 043-838-9562 FAX 043-838-9563</p>
                    </div>

                    <div class="company_info">
                        Copyright (c) <a href="login.php?status=">주식회사 퓨엠</a>All rights reserved
                    </div>
                </div>
      </Drawer>
    </>
  );
  
}
function mapStateToProps(state) {
   const {value}=state.headerReducer;
     return {value:value};
   }
 
   const mapDispatchToProps = dispatch => {
     return {
       // dispatching plain actions
       handleChange: (id,submenus) =>{setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(handleChange(id,submenus));
      }, 10);},
 
     }
   }
// function mapStateToProps(state) {
//   console.log(state)
//   return {exOpen:state.headerReducer};
// }

// const mapDispatchToProps = dispatch => ({
//     // dispatching plain actions
//     handleClick: text => dispatch(handleClick(text))
// })
// export default  connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)
export default  connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);