import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'

const style = {
	clock: {
		width: '300px',
		height: '300px',
		border: '3px solid green',
		borderRadius: '300px',
		color: 'white',
		cursor: 'pointer',
	}
}

export default class Clock extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	run: this.props.run,
		// }
	}

	render() {
		return (
			<div style={style.clock}>
				<h2 style={{textAlign: 'center'}}>Session</h2>
				<h2 style={{textAlign: 'center', marginTop: '140px'}}>
					<Timer 
						changedTime={this.props.changedTime} 
						breakLength={this.props.breakLength} 
						minutesRemaining={this.props.minutesRemaining} 
						secondsRemaining={this.props.secondsRemaining} 
						run={this.props.run}
						tick={this.props.tick}
						setParentState={this.props.setParentState}
						/>
				</h2>
			</div>
		)		
	}
}

