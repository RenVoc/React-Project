import React from "react";
import Clips from "./Clips";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[5].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const ClipsContainer = connect(mapStateToProps, mapDispatchToProps)(Clips);

export default ClipsContainer;