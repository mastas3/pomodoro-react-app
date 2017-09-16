import React from 'react'
import ReactDOM from 'react-dom'

export default class Timer extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.setParentState({
			secondsRemaining: this.props.secondsRemaining,
			minutesRemaining: this.props.minutesRemaining,
			changedTime: this.props.changedTime,
		})
		this.interval = setInterval(this.tick.bind(this), 1000)
	}

	tick() {
		if(this.props.run){
			if(this.props.secondsRemaining == 0 && this.props.minutesRemaining > 0) {
				this.props.setParentState({
					minutesRemaining: this.props.minutesRemaining-1,
					secondsRemaining: 59,
				})
			}
			else if(this.props.secondsRemaining==0 && this.props.minutesRemaining==0) {
				clearInterval(this.interval)
			} else {
				this.props.setParentState({
					secondsRemaining: this.props.secondsRemaining-1,
					minutesRemaining: this.props.minutesRemaining
				})
			}			
		}

	}

	stopTick() {
		clearInterval(this.interval)
	}

	componentWillUnmount() {
		this.stopTick()
	}

	render() {
		let nicelyPaddedMinutes = this.props.minutesRemaining>9 ? 
								  this.props.minutesRemaining : 
								  '0'+this.props.minutesRemaining
		let nicelyPaddedSeconds = this.props.secondsRemaining>9 ? 
								  this.props.secondsRemaining : 
								  '0'+this.props.secondsRemaining
		return (
			<div>
				Remaining Time: {nicelyPaddedMinutes}:{nicelyPaddedSeconds}
			</div>
		)

	}
}

