const add_post = 'ADD-POST';
const update_comment_info = 'UPDATE-COMMENT-INFO';


const CommentReducer = (state, action) => {
    switch (action.type) {
        case add_post:
            let newComment = {
                name: action.commentName,
                text: action.commentText
            };
            state.Comments.push(newComment);
            return state;
        case update_comment_info:
            state.newCommentText = action.newText;
            state.newCommentName = action.newName;
            return state;
        default:
            return state;
    }
};

export default CommentReducer;