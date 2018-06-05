import React, { Component } from 'react';
import './Bar.css';

export default class ProgressBar extends Component {
	state = { width: 0 }
	componentDidMount() {
		this.setState({ width: this.holder.clientWidth });
	}

	renderLabel() {
		const dist = 100 / (this.props.labels.length - 1);
		const fontSize = (this.props.labelSize / 100) * this.state.width;
		const style = { color: this.props.labelColor };
		return this.props.labels.map((label, i) => (
			<span
				style={{ left: `${(dist * i)}%`, ...style }}
				className="label"
				key={label}
			>
				{label}
			</span>
		))
	}

	renderBars() {
		const dist = 100 / (this.props.labels.length - 1);
		const array = this.props.labels.map((label, i) => (
			i === 0 || i === this.props.labels.length - 1 ? null : (
				<div
					style={{
						left: `${(dist * i)}%`,
						backgroundColor: this.props.seperatorColor,
					}}
					className="label progress-bar__seperator"
					key={label}
				/>)
			)
		)
		return array;
	}

	render() {
		const {
			progress,
			barColor,
			label,
		} = this.props;
		const style = {
			width: `${progress}%`,
			backgroundColor: barColor,
		};
		return (
			<div ref={holder => {this.holder = holder}} className="progress-bar">
				<div className="progress-bar__label-holder">
					{this.renderLabel()}
				</div>
				<div className="progress-bar__progress-bg">
					<div className="progress-bar__progress" style={style}/>
					{this.renderBars()}
				</div>
			</div>
		);
	}
}