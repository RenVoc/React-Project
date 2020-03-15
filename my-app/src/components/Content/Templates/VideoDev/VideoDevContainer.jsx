import React from "react";
import VideoDev from "./VideoDev";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[6].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const VideoDevContainer = connect(mapStateToProps, mapDispatchToProps)(VideoDev);

export default VideoDevContainer;