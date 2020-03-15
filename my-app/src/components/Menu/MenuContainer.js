import React from "react";
import Menu from "./Menu";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        MenuItemInformation: state.MenuItems.MenuItemInformation,
        MenuItemInformationDesign: state.MenuItems.MenuItemInformationDesign,
        MenuItemInformationVideo: state.MenuItems.MenuItemInformationVideo,
        MenuItemInformationRecording: state.MenuItems.MenuItemInformationRecording,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;