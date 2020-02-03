import React from "react";
import {NavLink} from "react-router-dom";

function MainPage(props) {
    let Title = props.title;
    let NewDescription = React.createRef();
    let NewName = React.createRef();

    let addComment = () => {
        let commentText = NewDescription.current.value;
        let commentName = NewName.current.value;
        props.addCommentInfo(commentText, commentName);

        let commentTextNull = NewDescription.current.value = '';
        let commentNameNull = NewName.current.value = '';
        props.updateCommentInfo(commentTextNull, commentNameNull);
    };

    let commentItem = props.CommentsInfo.map(function (comment, i) {
            return (
                <div className="comment_item" key={i}>
                    <span className="com_name">{comment.name}</span>
                    <div className="com">{comment.text}</div>
                </div>
            )
        }
    );

    let onCommentChange = () => {
        let newText = NewDescription.current.value;
        let newName = NewName.current.value;
        props.updateCommentInfo(newText,newName);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>{Title}</h1>
            <div className="comments">
                {commentItem}
                <h3>Add your comment</h3>
                <form onSubmit={handleSubmit} className="form">
                    <div className="label-block">
                        <label htmlFor="" className="label">Your Name</label>
                        <input type="text"
                               ref={NewName}
                               onChange={onCommentChange}
                               value={props.newCommentName}
                        />
                    </div>
                    <div className="label-block">
                        <label htmlFor="" className="label">Your Message</label>
                        <textarea name="" id=""
                                  ref={NewDescription}
                                  onChange={onCommentChange}
                                  value={props.newCommentText}
                        />
                    </div>
                    <div className="form_button">
                        <button className="btn" onClick={addComment}>Send your comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainPage;