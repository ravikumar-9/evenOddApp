// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, numberText: 'Even'}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))

    const {count} = this.state
    if (count % 2 === 0) {
      this.setState(() => ({numberText: 'Even'}))
      console.log('even')
    } else {
      this.setState(() => ({numberText: 'Odd'}))
    }
  }

  render() {
    const {count} = this.state

    const {numberText} = this.state

    return (
      <div className="bg-container">
        <div className="counter-card">
          <h1 className="count-heading">
            Count<span className="count-value"> {count}</span>
          </h1>
          <p className="count-description">
            Count is<span className="even-description">{numberText}</span>
          </p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="description">
            <sup>*</sup>Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
