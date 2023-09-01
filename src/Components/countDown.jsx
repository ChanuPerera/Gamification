import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 30 * 60, // 30 minutes in seconds
    };
  }

  componentDidMount() {
    // Start the countdown timer
    this.interval = setInterval(this.updateTimer, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to prevent memory leaks
    clearInterval(this.interval);
  }

  updateTimer = () => {
    // Update the timer every second
    const { timeRemaining } = this.state;

    if (timeRemaining > 0) {
      this.setState({
        timeRemaining: timeRemaining - 1,
      });
    } else {
      // Timer has reached 0, clear the interval
      clearInterval(this.interval);
    }
  };

  formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // Format the time as "HH:MM:SS"
    const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
    return formattedTime;
  };

  padZero = (value) => {
    // Add leading zero if the value is less than 10
    return value < 10 ? `0${value}` : `${value}`;
  };

  render() {
    const { timeRemaining } = this.state;
    const formattedTime = this.formatTime(timeRemaining);

    return (
      <div>
        <p className='font-link text-[#00FADF] sm:text-[1.3rem] lg:text-[3rem] font-semibold'>{formattedTime}</p>
      </div>
    );
  }
}

export default CountdownTimer;
