import React from 'react'
import ReactDOM from 'react-dom'

import Customize from '../components/Customize'
import Clock from '../components/Clock'

export default class ClockContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			minutesRemaining:25,
			secondsRemaining:0,
			breakLength: 5,
			run: false,
			changedTime: false,
			updateCustomize: true,
		}
	}

	incMinutes() {
		this.setState({
			minutesRemaining: this.state.minutesRemaining+1,
			secondsRemaining: 0,
			updateCustomize: true,
		})
	}

	decMinutes() {
		if(this.state.minutesRemaining>0){
			this.setState({
				minutesRemaining: this.state.minutesRemaining-1,
				updateCustomize: true,
				secondsRemaining: 0,
			})			
		}
	}

	incBreak() {
		this.setState({
			breakLength: this.state.breakLength+1,
			updateCustomize: true,
		})
	}

	decBreak() {
		if(this.state.breakLength > 0) {
			this.setState({
				breakLength: this.state.breakLength-1,
				updateCustomize: true,
			})			
		}
	}		

	setParentState(obj) {
		this.setState({
			minutesRemaining: obj.minutesRemaining,
			secondsRemaining: obj.secondsRemaining,
			updateCustomize: false,
		})
	}

	render() {
		return (
			<div>
				<Customize 
					handleIncMinuteChange={this.incMinutes.bind(this)} 
					handleDecMinuteChange={this.decMinutes.bind(this)} 
					handleIncBreak={this.incBreak.bind(this)} 
					handleDecBreak={this.decBreak.bind(this)} 
					minutesRemaining={this.state.minutesRemaining} 
					breakLength={this.state.breakLength}
					updateCustomize={this.state.updateCustomize}
				/>
				<div onClick={() => this.setState({ run: !this.state.run})}>
					<Clock setParentState={this.setParentState.bind(this)} {...this.state}/>
				</div>
			</div>
		)
	}
}

