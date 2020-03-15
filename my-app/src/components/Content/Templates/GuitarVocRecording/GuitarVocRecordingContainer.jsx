import React from "react";
import GuitarVocRecording from "./GuitarVocRecording";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[7].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const GuitarVocRecordingContainer = connect(mapStateToProps, mapDispatchToProps)(GuitarVocRecording);

export default GuitarVocRecordingContainer;