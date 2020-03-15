import React from "react";
import Distibuting from "./Distibuting";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[1].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const DistibutingContainer = connect(mapStateToProps, mapDispatchToProps)(Distibuting);

export default DistibutingContainer;