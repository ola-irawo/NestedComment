import React, { useState } from 'react'
import Button from './Button'
  
  const CommentItem = ({comment}) => {
    const [isReply, setIsReply] = useState(false);
    const [commentBody, setCommentBody] = useState("")
    const [commentList, setCommentList] = useState(comment.comments)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setCommentList(prevValue => {
        return [
          ...prevValue,
          {
            id: crypto.randomUUID(),
            body: commentBody,
            comments: []
          }
        ]
      })
    }
  
    return (
      <div
        style={{
          padding: "1rem",
          borderLeft: ".1rem solid black",
          backgroundColor: "burlywood",
          marginTop: ".4rem",
        }}
      >
        <p>{comment.body}</p>
        <button onClick={() => setIsReply(prevValue => !prevValue)}>
          {isReply ? "Cancel" : "Reply"}
        </button>
        <br />
        <hr />
        <div
          style={{
            padding: "1rem"
          }}
        >
          {isReply && <CommentTextarea commentBody={commentBody} setCommentBody={setCommentBody} handleSubmit={handleSubmit} />}
          {commentList.map(comment => {
            return <div>
              <CommentItem comment={comment} />
            </div>
          })}
          </div>
      </div>
    )
  }
  