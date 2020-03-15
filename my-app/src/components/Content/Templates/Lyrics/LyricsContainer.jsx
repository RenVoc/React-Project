import React from "react";
import Lyrics from "./Lyrics";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[4].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(Lyrics);

export default LyricsContainer;