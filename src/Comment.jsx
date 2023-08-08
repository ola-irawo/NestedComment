import React from 'react'
import Button from './componets/Button'

const Comment = () => {

    const postComment = () => {
        try{

        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div className='comment-container'>
      <textarea
        rows={3}
        placeholder="Add comment"
      />
      <br />
      <Button 
      text={"Post comment"}
      handleEvent={postComment}
      className={"btn-comment"}
      />
    </div>
  )
}

export default Comment
