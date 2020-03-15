import React from "react";
import Beats from "./Beats";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[9].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const BeatsContainer = connect(mapStateToProps, mapDispatchToProps)(Beats);

export default BeatsContainer;