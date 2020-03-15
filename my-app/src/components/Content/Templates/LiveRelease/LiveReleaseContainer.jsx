import React from "react";
import LiveRelease from "./LiveRelease";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[8].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const LiveReleaseContainer = connect(mapStateToProps, mapDispatchToProps)(LiveRelease);

export default LiveReleaseContainer;