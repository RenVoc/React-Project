import React from "react";
import SocialWeb from "./SocialWeb";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        TitlePage: state.TitlePage.TitlePages[2].title
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const SocialWebContainer = connect(mapStateToProps, mapDispatchToProps)(SocialWeb);

export default SocialWebContainer;