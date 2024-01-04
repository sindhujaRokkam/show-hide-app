// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  getFirst = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  getLast = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="content-container">
          <ul className="first-container">
            <button className="button" type="button" onClick={this.getFirst}>
              Show/Hide Firstname
            </button>
            {isFirst ? <p className="card">Joe</p> : null}
          </ul>
          <ul className="last-container">
            <button className="button" type="button" onClick={this.getLast}>
              Show/Hide Lastname
            </button>
            {isLast ? <p className="card">Jonas</p> : null}
          </ul>
        </div>
      </div>
    )
  }
}
export default ShowHide
