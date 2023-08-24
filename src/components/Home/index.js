import {Component} from 'react'

import Header from '../Header'

import CommentItem from '../CommentItem'

import './index.css'

class Home extends Component {
  state = {titleInput: '', commentInput: '', commentsList: []}

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    const {commentsList} = this.state
    event.preventDefault()
    const {titleInput, commentInput} = this.state
    const newComment = {
      id: commentsList.length,
      name: titleInput,
      comment: commentInput,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      titleInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  render() {
    const {titleInput, commentInput, commentsList} = this.state

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="comments-container">
            <h1 className="title">Tasks</h1>
            <form className="form-container" onSubmit={this.onAddComment}>
              <p className="description">Add Your Daily Tasks</p>
              <input
                value={titleInput}
                placeholder="Add Title"
                type="text"
                onChange={this.onChangeTitleInput}
                className="input"
              />
              <textarea
                value={commentInput}
                rows="6"
                placeholder="Add Description"
                type="textarea"
                onChange={this.onChangeCommentInput}
                className="text-area"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>

            <hr className="separator" />
            <p className="comments-text">List Of Tasks</p>
            <ul className="comments-list-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  toggleIsLiked={this.toggleIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home
