import React, { useState } from 'react'
import Button from './Button'

const CommentTextarea = ({handleSubmit, commentBody, setCommentBody}) => {

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        border: ".1rem solid black", width: "20rem", height: "10rem",
        display: "grid",
        padding: ".6rem .8rem",
      }}
    >
      <textarea
        name="comment"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder="comment"
        style={{
          height: "7rem"
        }}
      />

      <button
        style={{
          width: "fit-content",
          height: "2rem",
          border: ".1rem solid blue",
          borderRadius: ".8rem",
          padding: ".2rem .5rem"
        }} 
      >
        Comment
      </button>
    </form>
  )
}

export default CommentTextarea
