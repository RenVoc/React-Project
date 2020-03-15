import React from "react";
import Mastering from "./Mastering";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[0].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const MasteringContainer = connect(mapStateToProps, mapDispatchToProps)(Mastering);

export default MasteringContainer;