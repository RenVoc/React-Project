import React from "react";
import {addCommentActionCreator, onCommentChangeActionCreator} from "../../../../redux/CommentMainPageReducer";
import MainPage from "./MainPage";

function MainPageContainer(props) {

    let addComment = (commentText, commentName) => {
        props.dispatch(addCommentActionCreator(commentText, commentName));
    };

    let onCommentChange = (newText, newName) => {
        props.dispatch(onCommentChangeActionCreator(newText, newName));
    };


    return (
       <MainPage onCommentChangeActionCreator={onCommentChange}
                 addCommentActionCreator={addComment}
                 commentItem={props.store.CommentariesForm.Comments}/>
    );
}

export default MainPageContainer;