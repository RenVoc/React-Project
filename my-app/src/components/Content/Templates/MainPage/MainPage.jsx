import React from "react";

function MainPage(props) {


    let Title = props.title;
    let NewDescription = React.createRef();
    let NewName = React.createRef();

    let commentItem = props.commentItem.map(function (comment, i) {
            return (
                <div className="comment_item" key={i}>
                    <span className="com_name">{comment.name}</span>
                    <div className="com">{comment.text}</div>
                </div>
            )
        }
    );

    let addComment = () => {
        let commentText = NewDescription.current.value;
        let commentName = NewName.current.value;
        props.addCommentActionCreator(commentName, commentText);
        NewDescription.current.value = '';
        NewName.current.value = '';
    };

    let onCommentChange = () => {
        let newText = NewDescription.current.value;
        let newName = NewName.current.value;
        props.onCommentChangeActionCreator(newText, newName);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ state: this.state });
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
                        <button onChange={handleSubmit} className="btn" onClick={addComment}>Send your comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainPage;