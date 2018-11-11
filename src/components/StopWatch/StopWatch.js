import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './StopWatch.scss'

class StopWatch extends Component {
  constructor() {
    super()
    this.state ={
      isRunning: false,
      elapsedTime: 0,
      previousTime: 0
    }
    this.handleStopWatch = this.handleStopWatch.bind(this);
    this.resetStopWatch = this.resetStopWatch.bind(this);
  }

  handleStopWatch = () => {
    this.setState({
      isRunning: !this.state.isRunning
    })
    !this.state.isRunning && this.setState({previousTime: Date.now()})
  }

  componentDidMount = () => {
    this.intervalID = setInterval( () => this.tick(), 100)
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      });
    }
  }

  resetStopWatch = () => {
    this.setState({
      elapsedTime: 0
    });
  }


  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    const {handleStopWatch, resetStopWatch} = this;
    const {isRunning} = this.state;

    return (
      <div className="Stopwatch">
        <div className="StopwatchInfo">
          <h2>Stopwatch</h2>
          <span>{seconds}</span>
        </div>

        <div className="StopwatchButtons">
          <Button onClick={handleStopWatch}>
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={resetStopWatch}>Reset</Button>
        </div>
      </div>
    )
  }
}

export default StopWatch;
