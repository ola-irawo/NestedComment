import React, { useState } from 'react'
import Button from './componets/Button'
import { comment } from './componets/commentData'
import CommentItem from './componets/CommentItem'
import CommentInput from './componets/CommentInput'

const Comment = () => {
    const [comments, setComments] = useState(comment)
    const [commentBody, setCommentBody] = useState("")

    const addComment = () => {
        try{
            if(!commentBody){
                throw new Error("Comment field can't be empty")
            }
            setComments(oldComments => {
                return [
                    {
                        id: crypto.randomUUID(),
                        body: commentBody,
                        comment: []
                    },
                    ...oldComments
                ]
            })
            setCommentBody("")
        }
        catch(error){
            alert(error.message)
        }
    }

    console.log(comments)
  return (
    <div className='comment-container'>
        {/* Top level comment component */}
        <h2>React Nested Comment</h2>
      <CommentInput commentBody={commentBody} setCommentBody={setCommentBody} addComment={addComment} />
     
      <div className="users-comment">
        {comments.map(comment => {
            return <CommentItem key={comment.id} comment={comment} />
        })}
      </div>
    </div>
  )
}

export default Comment
