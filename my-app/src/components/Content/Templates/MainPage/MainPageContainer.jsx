import React from "react";
import {addCommentActionCreator, onCommentChangeActionCreator} from "../../../../redux/CommentMainPageReducer";
import MainPage from "./MainPage";

function MainPageContainer(props) {
    let state = props.store.getState();

    let addComment = (commentText, commentName) => {
        let action = addCommentActionCreator(commentText, commentName);
        props.store.dispatch(action);
    };

    let onCommentChange = (newText, newName) => {
        let action = onCommentChangeActionCreator(newText, newName);
        props.store.dispatch(action);
    };


    return (
       <MainPage onCommentChangeActionCreator={onCommentChange}
                 addCommentActionCreator={addComment}
                 commentItem={state.CommentariesForm.Comments}/>
    );
}

export default MainPageContainer;