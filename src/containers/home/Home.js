import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  reserveTicket,
  getQueueLength,
} from '../../modules/counter'

import './Home.css'

const Home = props => (
  <div className='Home' >
    <h1>ECE Tutoring Queue</h1>
    <p className='Home-queue'> {props.length} People in Line</p>
    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
    <p><button onClick={() => { props.reserveTicket(); props.getQueueLength() }}> Reserve Now </button></p>
  </div>
)

const mapStateToProps = state => ({
  length: state.counter.tickets.length,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  reserveTicket,
  getQueueLength,
  changePage: () => push('/about-us'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
