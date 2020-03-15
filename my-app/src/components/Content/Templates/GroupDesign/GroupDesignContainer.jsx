import React from "react";
import GroupDesign from "./GroupDesign";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[3].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const GroupDesignContainer = connect(mapStateToProps, mapDispatchToProps)(GroupDesign);

export default GroupDesignContainer;