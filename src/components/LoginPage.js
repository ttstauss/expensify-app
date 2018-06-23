import React from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin, startFacebookLogin } from '../actions/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button button--google" onClick={startGoogleLogin}>
        <FontAwesomeIcon className="social-icon" icon={faGoogle} />
        Login with Google
      </button>
      <button className="button button--facebook button--last" onClick={startFacebookLogin}>
        <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
        Login with Facebook
      </button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)