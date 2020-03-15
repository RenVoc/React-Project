import React from "react";
import {addCommentActionCreator, onCommentChangeActionCreator} from "../../../../redux/CommentMainPageReducer";
import MainPage from "./MainPage";
import {connect} from "react-redux/es/alternate-renderers";

let mapStateToProps = (state) =>{
    return{
        commentItem: state.CommentariesForm.Comments
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onCommentChangeActionCreator: (newText, newName) => {
            dispatch(onCommentChangeActionCreator(newText, newName));
        },
        addCommentActionCreator: (commentText, commentName) => {
            dispatch(addCommentActionCreator(commentText, commentName));
        }
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;