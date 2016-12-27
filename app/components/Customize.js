import React from 'react'

export default class Customize extends React.Component {

	constructor(props) {
		super(props)
	}

	incBreak() {
		this.props.handleIncBreak()
	}

	decBreak() {
		this.props.handleDecBreak()
	}

	incSession() {
		this.props.handleIncMinuteChange()
	}

	decSession() {
		this.props.handleDecMinuteChange()
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.updateCustomize
	}

	render() {
		let minutes = this.props.minutesRemaining

		return (
			<div className="pure-g">
				<div className="pure-u-1-2" style={{color: 'white'	}}>
					<h5>Break Length</h5>
					<h3>
						<span style={{cursor: 'pointer'}} 
							onClick={this.decBreak.bind(this)}>
							-
						</span>
							{this.props.breakLength} 
						<span 
							style={{cursor: 'pointer'}} onClick={this.incBreak.bind(this)}>
							+
						</span>
					</h3>
				</div>
				<div className="pure-u-1-2" style={{color: 'white'}}>
					<h5>Session Length</h5>
					<h3>
						<span style={{cursor: 'pointer'}} 
							onClick={this.decSession.bind(this)}>
							-
						</span> 
							{minutes} 
						<span style={{cursor: 'pointer'}} onClick={this.incSession.bind(this)}>
							+
						</span>
					</h3>
				</div>				
			</div>			
		)			
	}
}


// export default class Customize extends React.Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			minutesRemaining: this.props.minutesRemaining,
// 			breakLength: this.props.breakLength,		
// 		}
// 	}

// 	componendDidMount() {
// 		this.setState({
// 			minutesRemaining: this.props.minutesRemaining,
// 			secondsRemaining: this.props.secondsRemaining,
// 			breakLength: this.props.breakLength,
// 		})
// 	}

// 	incBreak() {
// 		this.setState({
// 			breakLength: this.state.breakLength+1
// 		})
// 	}

// 	decBreak() {
// 		if(this.state.breakLength>0){
// 			this.setState({
// 				breakLength: this.state.breakLength-1
// 			})
// 		}
// 	}

// 	incSession() {
// 		this.props.handleMinuteChange()
// 	}

// 	decSession() {
// 		if(this.state.minutesRemaining>0){
// 			this.setState({
// 				minutesRemaining: this.state.minutesRemaining-1,
// 				secondsRemaining:0
// 			})
// 		}
// 	}

// 	render() {
		// return (
		// 	<div className="pure-g">
		// 		<div className="pure-u-1-2" style={{color: 'white'	}}>
		// 			<h5>Break Length</h5>
		// 			<h3>
		// 				<span style={{cursor: 'pointer'}} 
		// 				onClick={this.decBreak.bind(this)}>- </span> {
		// 					this.state.breakLength} <span 
		// 					style={{cursor: 'pointer'}} onClick={this.incBreak.bind(this)}>+</span>
		// 			</h3>
		// 		</div>
		// 		<div className="pure-u-1-2" style={{color: 'white'}}>
		// 			<h5>Session Length</h5>
		// 			<h3>
		// 				<span style={{cursor: 'pointer'}} 
		// 				onClick={this.decSession.bind(this)}>-</span> 
		// 				{this.state.minutesRemaining} 
		// 				<span style={{cursor: 'pointer'}} onClick={this.incSession.bind(this)}>+</span>
		// 			</h3>
		// 		</div>				
		// 	</div>			
		// )

// 	}
// }11