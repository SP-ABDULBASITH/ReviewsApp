// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      console.log(index)
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <img className="" alt={username} src={imgUrl} />
          <div className="arrow-container">
            <button
              className="arrow-btn"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                className="arrow-image"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <p className="name">Wade Warren</p>
            <button
              className="arrow-btn"
              type="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                className="arrow-image"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
          <div className="description-container">
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
