import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked} = commentDetails
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likedImageUrl = isLiked
    ? 'https://icon2.cleanpng.com/20180330/rwq/kisspng-check-mark-royalty-free-stock-photography-clip-art-green-tick-5abe6cfb2006d2.7230647515224291791312.jpg'
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKRA0b_A2UodWkm89vE9l_wqXZZI3Vmcj2qaJpszR2UzKx2LgVv_TokYnPjqCPxRqyNk&usqp=CAU'

  const completedText = isLiked ? 'Task Completed' : 'Not Completed'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="cards-list">
      <div>
        <div className="username-time-container">
          <p className="name">Title: {name}</p>
        </div>
        <p className="comment">Description: {comment}</p>
      </div>

      <div className="buttons-container">
        <div className="like-container">
          <img src={likedImageUrl} alt="like" className="like-image" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLike}
          >
            {completedText}
          </button>
        </div>

        <button type="button" className="button" onClick={onDeleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
