import React from "react";
import {NavLink} from "react-router-dom";

function MainPage(props) {
    let Title = props.title;
    let NewDescription = React.createRef();
    let NewName = React.createRef();

    let commentItem = props.comments.map(function(comment, i){
            return(
                <div className="comment_item" key={i}>
                    <span className="com_name">{comment.name}</span>
                    <div className="com">{comment.text}</div>
                </div>
            )
        }
    );

    return (
        <div>
            <h1>{Title}</h1>
            <div className="comments">

                {commentItem}

                <h3>Add your comment</h3>

                <form action="" method="GET" className="form">
                    <div className="label-block">
                        <label htmlFor="" className="label">Your Name</label>
                        <input type="text" placeholder="Name" ref={NewName}/>
                    </div>
                    <div className="label-block">
                        <label htmlFor="" className="label">Your Message</label>
                        <textarea name="" id="" ref={NewDescription}></textarea>
                    </div>
                    <div className="form_button">
                        <button className="btn" >Send your comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainPage;