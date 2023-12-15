import React, { useState } from 'react'
import Button from './componets/Button'
import { comment } from './componets/commentData'
import CommentItem from './componets/CommentItem'
import CommentInput from './componets/CommentTextarea'
  
  const TopLevelComment = () => {
    const [commentList, setCommentList] = useState([
      {
        id: crypto.randomUUID(),
        body: "This is the first comment",
        comments: []
      },
      {
        id: crypto.randomUUID(),
        body: "This is the second comment",
        comments: []
      },
      {
        id: crypto.randomUUID(),
        body: "This is the third comment",
        comments: []
      },
    ])
    const [commentBody, setCommentBody] = useState("")
  
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
      setCommentBody("")
      console.log("submit")
    }
  
    return (
      <div className="top-level-comment">
        <h1>Nested Comment</h1>
        <CommentTextarea handleSubmit={handleSubmit} commentBody={commentBody}  setCommentBody={setCommentBody} />
  
        <br />
        <div>
          {commentList.map(comment => {
            return <CommentItem key={comment.id} comment={comment} />
          })}
        </div>
      </div>
    )
  }

  export default TopLevelComment