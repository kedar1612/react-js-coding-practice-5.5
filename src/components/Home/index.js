// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoginId: false}

  OnClickButton = () => {
    this.setState(prevState => ({isLoginId: !prevState.isLoginId}))
  }

  render() {
    const {isLoginId} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoginId={isLoginId} />
          {isLoginId ? (
            <Logout logout={this.OnClickButton} />
          ) : (
            <Login login={this.OnClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
