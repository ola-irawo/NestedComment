import React from 'react';
import Button from './Button';

const NestedCommentItem = ({ comment }) => {
  const [isReplying, setIsReplying] = React.useState(false);
  const [subComment, setSubComment] = React.useState("");

  const onReply = () => {
    if (!subComment) {
      return; // Don't add empty comments
    }

    // Update the nested comments of the current comment
    comment.comments.push({
      id: crypto.randomUUID(),
      body: subComment,
      comments: []
    });

    setSubComment(""); // Clear the input field
  };

  return (
    <div className="nested-comment-item">
      <p>{comment.body}</p>
      
      {isReplying ? (
        <div>
          <textarea
            rows={3}
            placeholder="Add comment"
            value={subComment}
            onChange={(e) => setSubComment(e.target.value)}
          />
  
          <Button 
            text={"Post comment"}
            handleEvent={onReply}
            className={"btn-comment"}
          />
        </div>
      ) : (
        <Button
          text={"Reply"}
          handleEvent={() => setIsReplying(true)}
        />
      )}
      
      {/* Render nested comments */}
      {comment.comments.map(nestedComment => (
        <NestedCommentItem key={nestedComment.id} comment={nestedComment} />
      ))}
    </div>
  );
};

export default NestedCommentItem;
